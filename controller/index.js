/* File name : controller/index.js
Student name : Akino Kashima 
Student ID : 301155967
Date: 10.23.2021  */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
let jwt = require('jsonwebtoken');
let dbURI = require('../config/db');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias


exports.home = function(req, res, next) {
    res.render('index', { title: 'Home', username: req.user ? req.user.username : '' });
};

exports.about = function(req, res, next) {
    res.render('about', { title: 'About', username: req.user ? req.user.username : '' });
}

exports.projects = function(req, res, next) {
    res.render('projects', { title: 'Projects' , username: req.user ? req.user.username : ''});
}

exports.services = function(req, res, next) {
    res.render('services', { title: 'Services' , username: req.user ? req.user.username : ''});
}

exports.contact = function(req, res, next) {
    res.render('contact', { title: 'Contact' , username: req.user ? req.user.username : ''});
}

// Login page
exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user)
    {
        res.render('auth/login', 
        {
           title: "Login",
           messages: req.flash('loginMessage'),
           username: req.user ? req.user.username : '' 
        })
    }
    else
    {
        return res.redirect('/');
    }
}

// Process Login information
exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // if we get server err
        if(err)
        {
            return next(err);
        }
        // is there a user login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error?
            if(err)
            {
                return next(err);
            }

            const payload = 
            {
                id: user._id,
                username: user.username,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, dbURI.Secret, {
                expiresIn: 604800 // 604800 seconds = 1 week
            });
        

            return res.redirect('/business/list');
        });
    })(req, res, next);
}

// Display Register Page
module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            username: req.user ? req.user.username : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

// Process register information
module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    let newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });

    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                username: req.user ? req.user.username : ''
            });
        }
        else
        {
 
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/business/list')
            });
        }
    });
}

// Logout
module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}