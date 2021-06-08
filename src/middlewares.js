import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
    credentials: {
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET
    }
});

const isHeroku = process.env.NODE_ENV === "production";

const multerUploader = multerS3({
    s3: s3,
    bucket: "developer-profile-oss",
    acl: "public-read",
})

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = "Dev Profile";
    res.locals.loggedUser = req.user || null;
    res.locals.isHeroku = isHeroku;
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
    },
    storage: isHeroku? multerUploader : undefined,
});