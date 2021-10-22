<<<<<<< HEAD
// Require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
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
            required: 'email address is required'
       },
       displayName: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
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

=======
// Require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
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
            required: 'email address is required'
       },
       displayName: 
       {
            type: String,
            default: '',
            trim: true,
            required: 'Display Name is required'
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

>>>>>>> dd6c681507599ea9f1f2adcfbe9aa99cf1ee1b37
module.exports.User = mongoose.model('User', User);