// import routers & router.use

const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

// router.use((req, res) => {
//   res.status(404).end();
// });

module.exports = router;