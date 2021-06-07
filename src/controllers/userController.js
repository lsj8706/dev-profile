import axios from "axios";
import passport from "passport";
import User from "../models/User";
import fetch from "node-fetch";

const getQuote = async (req, res) => {
  const url = "http://quotes.stormconsultancy.co.uk/random.json";
  const quoteData = await axios.get(url).then(function (response) {
    return response.data;
  });
  const quote = quoteData.quote;
  const author = quoteData.author;
  return { quote, author };
};

export const handleHome = async (req, res) => {
  const quote = await getQuote();
  res.render("home", {
    pageTitle: "Home",
    quote: quote.quote,
    author: quote.author,
  });
};

export const getUserDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const quote = await getQuote();
    const user = await User.findById(id);
    const repo = await getRepos();
    const totalCon = await getContributions(user.githubName);
    res.render("userDetail", {
      pagetTitle: "User Detail",
      quote: quote.quote,
      author: quote.author,
      user,
      fitstRepoName: repo.fitstRepoName,
      firstRepoUrl: repo.firstRepoUrl,
      secondRepoName: repo.secondRepoName,
      secondRepoUrl: repo.secondRepoUrl,
      totalContributions: totalCon,
    });
  } catch (error) {
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

const getRepos = async () => {
  const url =
    "https://api.github.com/users/lsj8706/repos?sort=updated&per_page=2";
  const latelyRepos = await axios.get(url).then(function (response) {
    return response.data;
  });
  const fitstRepoName = latelyRepos[0].name;
  const secondRepoName = latelyRepos[1].name;
  const firstRepoUrl = latelyRepos[0].html_url;
  const secondRepoUrl = latelyRepos[1].html_url;

  return {
    fitstRepoName,
    firstRepoUrl,
    secondRepoName,
    secondRepoUrl,
  };
};

const getContributions = async (username) => {
  const token = process.env.GH_SECRET_SH;
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query: `query {user(login: "${username}") {contributionsCollection {contributionCalendar {totalContributions}}}}`,
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const totalContributions = await response.json();
  const total =
    totalContributions.data.user.contributionsCollection.contributionCalendar
      .totalContributions;
  return total;
};
