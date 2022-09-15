const router = require('express').Router();
const { Post, User } = require('../../models');

// GET request all posts
router.get('/', (req, res) => {
    
    Post.findAll({
        //query config
        attributes: ['id', 'post_url', 'title', 'created_at'],
        include: [
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

// POST request to create a post

// PUT request to update a post

// DELETE request a post


module.exports = router;