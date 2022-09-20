const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET request all posts
router.get('/', (req, res) => {
    
    Post.findAll({
        //query config
        attributes: ['id', 'title', 'author', 'lexile_level', 'genre', 'post_text', 'created_at'],
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET request a single post by id
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }, 
        attributes: ['id', 'title', 'author', 'lexile_level', 'genre', 'post_text', 'created_at'],
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
     })
});

// POST request to create a post
router.post('/', withAuth, (req, res) => {
    console.log(req.session)
    Post.create({
        title: req.body.title, 
        author: req.body.author,
        lexile_level: req.body.lexile_level,
        genre: req.body.genre,
        post_text: req.body.post_text, 
        user_id: req.session.user.id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE request a post
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;