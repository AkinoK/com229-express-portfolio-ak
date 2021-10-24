/* File name : models/user.js
Student name : Akino Kashima 
Student ID : 301155967
Date: 10.23.2021  */

// Require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        firstname: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'firstname is required'
        },
        lastname: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'lastname is required'
        },
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required',
            validate: [(password) => {
                return password && password.length > 6;
            }, 'Password should be longer']
        },
        
        password: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        },
        
       email: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'email address is required',
            match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
       },
       created: 
       {
            type: Date,
            default: Date.now
       },
       update: 
       {
            type: Date,
            default: Date.now
       }
    },
    {
        collection: "users"
    }
);

// Configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);