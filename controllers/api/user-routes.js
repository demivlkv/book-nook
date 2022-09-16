const router = require('express').Router();
const { application } = require('express');
const { User, Post, Comment } = require('../../models');
const passport = require('passport');

// GET request for all /api/users
router.get('/', (req, res) => {
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
        attributes: ['id', 'title', 'post_text', 'created_at']
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


// // POST request to create new user
// router.post('/', (req, res) => {
//   User.create({
//     username: req.body.username,
//     password: req.body.password
//   })
//     .then(dbUserData => res.json(dbUserData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


// login route for authentication
  router.post('/login', 
  passport.authenticate('local', {failureRedirect: '/login' }), 
  function(req, res) {
    res.redirect('/');
  });
  router.get('/register', (req, res) => {
    res.render('register');
  });
  router.post('/register', (req, res) => {
    db.User.create(req.body)
    .then(_ => res.redirect('/login'))
    .catch(err => res.redirect('/register'))
  })

    // router.post('/login', (req, res) => {
    //     User.findOne({
    //         where: {
    //           username: req.body.username
    //         }
    //       }).then(dbUserData => {
    //         if (!dbUserData) {
    //           res.status(400).json({ message: 'No user with that username!' });
    //           return;
    //         }
    //         const validPassword = dbUserData.checkPassword(req.body.password);
    // if (!validPassword) {
    //   res.status(400).json({ message: 'Incorrect password!' });
    //   return;
    // }
    //         res.json({ user: dbUserData });
    //       });
    //   })  

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


// destroy user session

module.exports = router;
