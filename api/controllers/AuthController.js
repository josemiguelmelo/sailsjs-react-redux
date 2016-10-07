/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

"use strict";

var Users = require('../models/User');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var config = require('../../config/main');

module.exports = {

    login : function(req, res, next) {
        //passport.authenticate('jwt', { session: false});

        let user = setUserInfoFromReq(req);

        Users.findUser({ username : user.username }).exec(function (err, foundUser) {
            if (err) {
                res.status(422).json({error : 'No user was found.'});
                return ;
            }

            // If user is found, check role.
            if (foundUser) {
                res.status(200).json({
                    token: 'JWT ' + generateToken(user),
                    user: user
                });
                return;
            }

            res.status(422).json({error : 'No user was found.'});
        });


    },

    register : function(req, res, next) {
        // Check for registration errors
        const email = req.body.email;
        const username = req.body.username;
        const password = req.body.password;

        // Return error if no email provided
        if (!email) {
            return res.status(422).send({ error: 'You must enter an email address.'});
        }

        // Return error if full name not provided
        if (!username) {
            return res.status(422).send({ error: 'You must enter your username.'});
        }

        // Return error if no password provided
        if (!password) {
            return res.status(422).send({ error: 'You must enter a password.' });
        }


        Users.findUser({ email: email }).exec(function(err, existingUser) {
            console.log(existingUser);
            if (err) { return next(err); }

            // If user is not unique, return error
            if (existingUser) {
                return res.status(422).send({ error: 'That email address is already in use.' });
            }

            // If email is unique and password was provided, create account
            var user = Users.createUser({
                email: email,
                password: password,
                username: username
            }).exec(function(err, user) {
                if (err) { return next(err); }
                console.log(user);

                // Subscribe member to Mailchimp list
                // mailchimp.subscribeToNewsletter(user.email);

                // Respond with JWT if user was created

                let userInfo = setUserInfo(user);

                res.status(201).json({
                    token: 'JWT ' + generateToken(userInfo),
                    user: userInfo
                });
            });
        });
    }
};



function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}

// Set user info from request
function setUserInfoFromReq(req) {
    return {
        username : req.body.username,
        password : req.body.password
    };
}
function setUserInfo(user) {
    return {
        username : user.username,
        password : user.email
    };
}
