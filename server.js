// if (process.env.NODE_ENV !== 'production') { require('dotenv').config() };
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');



const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');


// const { User } = require('./models');

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


 


// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})