const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },

    careerGoal: {
      type: String,
      enum: [
        "Java Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Python Developer",
        "Data Analyst",
        "AI / Machine Learning Developer",
        "Generative AI Developer",
        "Mobile App Developer",
        "Cloud / DevOps Engineer",
        "Cybersecurity Engineer",
        "Not Decided Yet",
      ],
      default: "Not Decided Yet",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);