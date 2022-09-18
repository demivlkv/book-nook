const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const passport = require('../../config/passport');

// GET request for all /api/users
router.get('/', (req, res) => {
  // console.log('pikapika')
  User.findAll({
    attributes: { exclude: ['password'] }
})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET request /api/users/# by id
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }, 
    include: [
      {
        model: Post, 
        attributes: ['id', 'title', 'author', 'lexile_level', 'genre', 'post_text', 'created_at']
      }, 
      //comment block
      {
        model: Comment, 
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
            model: Post, 
            attributes: ['title']
        }
    }
    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// POST request to create new user
router.post('/signup', (req, res) => {
  // console.log('charmander')
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user = dbUserData;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
    res.json(dbUserData)});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log('proof')
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {

    req.session.save(() => {
      req.session.user = dbUserData;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json(req.user);
    })
  });  
});


router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
    res.status(204).end();
  });
  } else {
    res.status(404).end();
  }
});

// PUT request to update user
router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE request for user /api/users/#
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
