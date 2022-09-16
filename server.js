// if (process.env.NODE_ENV !== 'production') { require('dotenv').config() };
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const { User } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

// const dotenv = require('dotenv').config();
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        // session expires after x minutes
        
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};




app.use(session(sess));

const hbs = exphbs.create({ helpers });

//middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    //set up user model
    db.User.findAll({ where: {UserId: id }})
    .then(users => {
        done(null, users[0]);
    })
    .catch(err => done(err))
});

passport.use(new localStrategy(function (username, password, done) {
    User.findOne({ username: username}, function (err, user) {
        if (err) {
            return done(err);
        } if (!user) {
            return done(null, false, { message: 'Incorrect Username.'});
        }
        bcrypt.compare(password, user.password, function(err, res){
            if (err) return done(err);

            if (res === false) {
                return done(null, false, { message: 'Incorrect password.'});
            }
            return done(null, user);
        })
    })
}));




//  passport.use(new localStrategy (
//      function(username, password, done) {
//          db.User.findAll({ where: { Username: username}})
//              .then(users => {
//              if(users.length === 0) {
//                  return done(null, false);
//              }
//              //wrong pswrd
//              if(users[0].Password !== password) {
//                  return done(null, false);
//              }

//              //correct password
//              return done(null, users[0].dataValues);
//          })
//          .catch(err => {
//              return done(err);
//          });
//      }
//  ));

//passport.js
app.use(passport.initialize());
app.use(passport.session());

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})