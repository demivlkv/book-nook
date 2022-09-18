const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// render homepage template
router.get('/', (req, res) => {
    console.log(req.session, 'try this');

    res.render('index');
});

// render login template
router.get('/login', (req, res) => {
    res.render('login');
});

// render signup template
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;