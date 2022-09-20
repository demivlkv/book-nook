const router = require('express').Router();

// render homepage template
router.get('/', (req, res) => {
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