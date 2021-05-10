import axios from "axios";

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
