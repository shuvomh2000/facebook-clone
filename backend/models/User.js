const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email  is required"],
      trim: true,
      text: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    pictrue: {
      type: String,
      trim: true,
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
      required: [true, "gender  is required"],
    },
    bYear: {
      type: Number,
      required: [true, "Year  is required"],
      trim: true,
    },
    bMonth: {
      type: Number,
      required: [true, "Month  is required"],
      trim: true,
    },
    bDay: {
      type: Number,
      required: [true, "Day  is required"],
      trim: true,
    },
    varified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      },
    ],
    details: {
      bio: String,
      othername: String,
      job: String,
      workplace: String,
      highsSchool: String,
      currentCity: String,
      hometown: String,
      instagram: String,
      relationship: {
        type: String,
        enum: ["single", "in a relationship", "married", "complicated"],
      },
    },
    savePosts: [
      {
        post: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "post",
        },
        saveAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
