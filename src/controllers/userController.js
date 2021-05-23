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
  const quote = await getQuote();
  res.render("userDetail", {
    pagetTitle: "User Detail",
    quote: quote.quote,
    author: quote.author,
  });
};

export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const postEditProfile = (req, res) => {
  console.log(req.body);
  res.redirect("/users/edit-profile");
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
      name,
      email,
    },
  } = profile;

  try {
    const user = await User.findOne({ email });
    if (user) {
      (user.githubId = githubId), (user.githubName = githubName);
      await user.save();
      return done(null, user);
    } else {
      const newUser = await User.create({
        githubId,
        githubName,
        avatarUrl,
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
