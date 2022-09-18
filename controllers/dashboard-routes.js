const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');
// const isLoggedIn = require('../utils/auth');

// render dashboard menu & load user posts if any
router.get('/', (req, res) => {
    console.log(req.session);
    // Post.findAll({
    //     where: {
    //         // use the id from the session
    //         user_id: req.session.user_id
    //     },
    //     attributes: [ 'id', 'title', 'author', 'lexile_level', 'genre', 'post_text', 'created_at' ],
    //     order: [['created_at', 'DESC']],
    //     include: [
    //         {
    //             model: Comment,
    //             attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //             include: {
    //                 model: User,
    //                 attributes: ['username']
    //             }
    //         },
    //         {
    //             model: User,
    //             attributes: ['username']
    //         }
    //     ]
    // })
    // .then(dbPostData => {
    //     // serialize data before passing to template
    //     console.log(dbPostData);
    //     const posts = dbPostData.map(post => post.get({ plain: true }));
    //     console.log(posts);
    //     res.render('home', { posts, loggedIn: true });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
    res.render('home', {layout: 'dashboard'});
});


module.exports = router;