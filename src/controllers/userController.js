import axios from "axios";
import passport from "passport";
import User from "../models/User";

const getQuote = async (req, res) => {
  const url = "http://quotes.stormconsultancy.co.uk/random.json";
  const quoteData = await axios.get(url).then(function (response) {
    return response.data;
  });
  const quote = quoteData.quote;
  const author = quoteData.author;
  return { quote, author };
};

const gitTrend = async (req, res) => {
  const url =
    "https://api.trending-github.com/github/repositories?period=daily";
  const trendData = await axios.get(url).then(function (response) {
    return response.data;
  });
  const name0 = trendData[0].name;
  const description0 = trendData[0].description;
  const Url0 = trendData[0].url;
  const stars0 = trendData[0].stars;
  const name1 = trendData[1].name;
  const description1 = trendData[1].description;
  const Url1 = trendData[1].url;
  const stars1 = trendData[1].stars;
  const name2 = trendData[2].name;
  const description2 = trendData[2].description;
  const Url2 = trendData[2].url;
  const stars2 = trendData[2].stars;

  return {
    name0,
    description0,
    Url0,
    stars0,
    name1,
    description1,
    Url1,
    stars1,
    name2,
    description2,
    Url2,
    stars2,
  };
};

export const handleHome = async (req, res) => {
  const quote = await getQuote();
  const trend = await gitTrend();
  res.render("home", {
    pageTitle: "Home",
    quote: quote.quote,
    author: quote.author,
    name0: trend.name0,
    description0: trend.description0,
    Url0: trend.Url0,
    stars0: trend.stars0,
    name1: trend.name1,
    description1: trend.description1,
    Url1: trend.Url1,
    stars1: trend.stars1,
    name2: trend.name2,
    description2: trend.description2,
    Url2: trend.Url2,
    stars2: trend.stars2,
  });
};

export const getUserDetail = async (req, res) => {
  try{
    const id = req.params.id;
    const quote = await getQuote();
    const user = await User.findById(id);
    res.render("userDetail", {
      pagetTitle: "User Detail",
      quote: quote.quote,
      author: quote.author,
      user,
    });
  } catch(error){
    console.log(error);
    res.redirect("/");
  }
};


export const getEditProfile = async (req, res) => {
  const {
    user: { _id: id },
  } = req;
  try {
    const user = await User.findById(id);
    if (user.id !== id) {
      throw Error();
    } else {
      res.render("editProfile", { pageTitle: "Edit Profile", user });
    }
  } catch (error) {
    console.log(error);
  }
};

export const postEditProfile = async (req, res) => {
  const {
    user: { _id: id },
    body: { name, email, school, blogUrl, tech, career, introduction },
    file,
  } = req;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        avatarUrl: file ? file.path : req.session.passport.user.avatarUrl,
        name,
        email,
        school,
        blogUrl,
        tech: User.formatTech(tech),
        career: User.formatCareer(career),
        introduction,
      },
      {
        new: true,
      }
    );
    req.session.passport.user = updatedUser;
    //console.log(updatedUser);
    res.redirect("/users/edit-profile");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const handleUsers = (req, res) => {
  res.render("users", { pageTitle: "Users" });
};

export const githubLogin = passport.authenticate("github", {
  scope: ["user:email"],
});

export const githubLoginCallback = async (_, __, profile, done) => {
  const {
    _json: {
      id: githubId,
      login: githubName,
      avatar_url: avatarUrl,
      html_url: githubUrl,
      name,
      email,
    },
  } = profile;

  try {
    const user = await User.findOne({ githubId });
    if (user) {
      (user.githubId = githubId), (user.githubName = githubName);
      await user.save();
      return done(null, user);
    } else {
      const newUser = await User.create({
        githubId,
        githubName,
        avatarUrl,
        githubUrl,
        name,
        email,
      });
      return done(null, newUser);
    }
  } catch (error) {
    return done(error);
  }
};

export const postGithubLogin = (req, res) => {
  const userId = req.user.id;
  res.redirect(`/users/${userId}`);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect("/");
};
