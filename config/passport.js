const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

var db = require('../models');


passport.use(new localStrategy (
    {
        username: 'username', 
        password: 'password', 
        session: false
    },
function(username, password, done) {
    
    db.User.findOne({
        where: {
            username: username
        }
    }) 
    .then(function(dbUserData) {
        if (!dbUserData) {
            return done (null, false, {
                message: 'Not a current user.'
            });
        }
        const validPassword = dbUserData.checkPassword(password);
        if (!validPassword) {
            return done(null, false, {
                message:'Incorrect Password!'
            });
        }
        return done (null, dbUserData);
     });
    }
));


passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;