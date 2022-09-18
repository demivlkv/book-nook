const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');
// const isLoggedIn = require('../utils/auth');

// render dashboard menu & load user posts if any
router.get('/', (req, res) => {
    console.log('dashboard');
    console.log(req.session.user.id);
    Post.findAll({
        // where: {
        //     // use the id from the session
        //     user_id: req.session.user.id
        // },
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
        // serialize data before passing to template
        console.log(dbPostData);
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts);
        res.render('home', { posts, layout: 'dashboard', loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// render single post template
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [ 'id', 'title', 'author', 'lexile_level', 'genre', 'post_text', 'created_at' ],
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
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        // serialize the data & pass data into template
        const post = dbPostData.get({ plain: true });
        res.render('single-post', { post, layout: 'dashboard', loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;