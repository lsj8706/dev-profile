import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  avatarUrl: String,
  githubId: {
    type: Number,
    required: "GitHub ID is required",
    unique: true,
  },
  githubName: {
    type: String,
    required: "Github nickname is required",
    trim: true,
  },
  school: {
    type: String,
    trim: true,
  },
  tech: [{ type: String, trim: true }],
  career: [{ type: String, trim: true }],
  introduction: { type: String, maxLength: 500 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  blogUrl: {
    type: String,
    default: "#",
  },
  githubUrl: {
    type: String,
    default: "#",
  },
});

UserSchema.static("formatTech", function (tech) {
  return tech.split(",");
});
UserSchema.static("formatCareer", function (career) {
  return career.split(",");
});

const User = mongoose.model("User", UserSchema);

export default User;
