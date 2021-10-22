<<<<<<< HEAD
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias


exports.home = function(req, res, next) {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
};

exports.about = function(req, res, next) {
    res.render('about', { title: 'About', displayName: req.user ? req.user.displayName : '' });
}

exports.projects = function(req, res, next) {
    res.render('projects', { title: 'Projects' , displayName: req.user ? req.user.displayName : ''});
}

exports.services = function(req, res, next) {
    res.render('services', { title: 'Services' , displayName: req.user ? req.user.displayName : ''});
}

exports.contact = function(req, res, next) {
    res.render('contact', { title: 'Contact' , displayName: req.user ? req.user.displayName : ''});
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
           displayName: req.user ? req.user.displayName : '' 
        })
    }
    else
    {
        return res.redirect('/');
    }
}

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

            // const payload = 
            // {
            //     id: user._id,
            //     displayName: user.displayName,
            //     username: user.username,
            //     email: user.email
            // }

            // const authToken = jwt.sign(payload, DB.Secret, {
            //     expiresIn: 604800 // 1 week
            // });

            // /* TODO - Getting Ready to convert to API
            // res.json({success: true, msg: 'User Logged in Successfully!', user: {
            //     id: user._id,
            //     displayName: user.displayName,
            //     username: user.username,
            //     email: user.email
            // }, token: authToken});
            // */

            return res.redirect('/business/list');
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
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
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
            // if no error exists, then registration is successful

            // redirect the user and authenticate them

            /* TODO - Getting Ready to convert to API
            res.json({success: true, msg: 'User Registered Successfully!'});
            */

            return passport.authenticate('local')(req, res, () => {
                res.redirect('/business/list')
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}
=======
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias


exports.home = function(req, res, next) {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : '' });
};

exports.about = function(req, res, next) {
    res.render('about', { title: 'About', displayName: req.user ? req.user.displayName : '' });
}

exports.projects = function(req, res, next) {
    res.render('projects', { title: 'Projects' , displayName: req.user ? req.user.displayName : ''});
}

exports.services = function(req, res, next) {
    res.render('services', { title: 'Services' , displayName: req.user ? req.user.displayName : ''});
}

exports.contact = function(req, res, next) {
    res.render('contact', { title: 'Contact' , displayName: req.user ? req.user.displayName : ''});
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
           displayName: req.user ? req.user.displayName : '' 
        })
    }
    else
    {
        return res.redirect('/');
    }
}

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

            // const payload = 
            // {
            //     id: user._id,
            //     displayName: user.displayName,
            //     username: user.username,
            //     email: user.email
            // }

            // const authToken = jwt.sign(payload, DB.Secret, {
            //     expiresIn: 604800 // 1 week
            // });

            // /* TODO - Getting Ready to convert to API
            // res.json({success: true, msg: 'User Logged in Successfully!', user: {
            //     id: user._id,
            //     displayName: user.displayName,
            //     username: user.username,
            //     email: user.email
            // }, token: authToken});
            // */

            return res.redirect('/business/list');
        });
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    // check if the user is not already logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    // instantiate a user object
    let newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
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
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
            // if no error exists, then registration is successful

            // redirect the user and authenticate them

            /* TODO - Getting Ready to convert to API
            res.json({success: true, msg: 'User Registered Successfully!'});
            */

            return passport.authenticate('local')(req, res, () => {
                res.redirect('/business/list')
            });
        }
    });
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}
>>>>>>> dd6c681507599ea9f1f2adcfbe9aa99cf1ee1b37
