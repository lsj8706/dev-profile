import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    avatarUrl: String,
    githubId: {
        type: Number,
        required: "GitHub id is required"     
    },
    githubName: {
        type: String,
        required: "Github nickname is required",
        trim: true
    },
    school: {
        type: String,
        trim: true
    },
    tech: [{ type: String, trim: true }],
    career: [{ type: String, trim: true }],
    introduction: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    blogUrl: {
        type: String,
        default: "#"
    },
    githubUrl: {
        type: String,
        default: "#"
    }
});

const User = mongoose.model("User", UserSchema);


export default User;