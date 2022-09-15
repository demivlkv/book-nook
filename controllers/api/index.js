// import routers & router.use

const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
// router.use((req, res) => {
//   res.status(404).end();
// });

module.exports = router;