const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema(
  {
    name: {
      type:String,
      required:[true,'please enter your name']
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
      set:(v)=> bcrypt.hashSync(v,bcrypt.genSaltSync(10))
    },
    confirmPassword: {
      type: String,
      required: [true, "please renter a password"],
      validate: {
        validator: function (value) {
          return bcrypt.compareSync(value,this.password)
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

userSchema.pre("save",function(next){
  this.confirmPassword=undefined
  next()
})

const User = mongoose.model("User", userSchema);
module.exports = User;
