const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Email is not validate")
        }
      }

    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender must be male, female, or others");
        }
      },
    },
    photoUrl: {
      type: String,
    },
    about: {
      type: String,
      default: "This is default value",
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model("User", userSchema);
