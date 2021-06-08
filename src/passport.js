import passport from "passport";
import GithubStrategy from "passport-github2";
import { githubLoginCallback } from "./controllers/userController";
import User from "./models/User";

passport.use(new GithubStrategy(
    {
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `https://dev-profile-2021.herokuapp.com/auth/github/callback`
    }, 
    githubLoginCallback
)
);

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });