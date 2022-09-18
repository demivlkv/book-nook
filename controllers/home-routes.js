const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// render homepage template
router.get('/', (req, res) => {
    console.log(req.session, 'try this');
    Post.findAll({
        attributes: [ 'id', 'title', 'author', 'lexile_level', 'genre', 'post_text', 'created_at' ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('index', { posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
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