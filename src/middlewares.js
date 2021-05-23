import multer from "multer";

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "Dev Profile";
    res.locals.loggedUser = req.user || null;

    next();
};

export const onlyPublic = (req, res, next) => {
    if(req.user){
        res.redirect("/");
    } else {
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if(req.user){
        next();
    } else {
        res.redirect("/");
    }
};

export const uploadFiles = multer({
    dest:"uploads/",
    limits: {
        fileSize: 3000000
    }
});