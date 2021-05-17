import axios from "axios";
import passport from "passport";
import User from "../models/User";

const getQuote = async (req,res) =>{
    const url = "http://quotes.stormconsultancy.co.uk/random.json";
    const quoteData = await axios.get(url).then(function(response){
        return response.data;
    });
    const quote = quoteData.quote;
    const author = quoteData.author;
    return {quote,author};
}

export const handleHome = async (req,res)=>{
    const quote = await getQuote();
    res.render("home",{pageTitle:"Home", quote:quote.quote, author:quote.author});
}


export const getUserDetail = async (req,res) =>{
    const quote = await getQuote();
    res.render("userDetail",{pagetTitle:"User Detail", quote:quote.quote, author:quote.author})
}

export const getEditProfile = (req,res)=> res.render("editProfile",{pageTitle:"Edit Profile"});

export const postEditProfile = (req,res) =>{
    console.log(req.body);
    res.redirect("/users/edit-profile");
};


export const getJoin = (req,res)=>{
    res.render("join",{pageTitle: "Join"});
};

export const getLogin = (req,res)=>{
    res.render("login",{pageTitle: "Login"});
};

export const handleUsers = (req,res)=>{
    res.render("users",{pageTitle:"Users"});
}

export const githubLogin = passport.authenticate("github", {scope: [ "user:email" ]});

export const githubLoginCallback = async (_, __, profile, done) =>{
    const {_json: {id:githubId, login:githubName, avatar_url:avatarUrl, name, email}} = profile;

    try{
        const user = await User.findOne({email});
        if(user){
            user.githubId = githubId,
            user.githubName = githubName
            await user.save();
            return done(null, user);
        }else{
            const newUser = await User.create({
                githubId,
                githubName,
                avatarUrl,
                name,
                email
            });
            return done(null, newUser);
        }
    }catch(error){
        return done(error);
    }
};

export const postGithubLogin = (req,res)=>{
    const userId = req.user.id;
    res.redirect(`/users/${userId}`);
}

export const logout = (req,res)=>{
    req.logout();
    res.redirect("/");
}