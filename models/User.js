const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    name: {
      type:String,
      unique:[true,'name must be unique']
    } ,
    email: {
      type: String,
      required: [true, "please provide a email"],
      validate: [validator.isEmail, "plese provide a valid email"],
      lowercase: true,
      trim: true,
      unique:[true,'email must be unique']
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
      validate: {
        validator: (value) => validator.isStrongPassword(value),
        message: "password should be strong",
      },
    },
    confirmPassword: {
      type: String,
      required: [true, "please provide a password"],
      validate: {
        validator: function (value) {
          return this.password === value;
        },
        message: "confirm password don't match!",
      },
    },
    phoneNumber: String,
    role: {
      type: String,
      enum: ["user", "store-manager", "admin"],
      default: "user",
    },
    img: {
      type: String,
      validate: [validator.isURL, "please provide a valid image url"],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "inactive",
    },
    address: String,
    socialLinks: {
      facebook: String,
      linkedin: String,
      github: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
