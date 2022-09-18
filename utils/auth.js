// middleware for user authentication
// const withAuth = (req, res, next) => {
//     if (!req.session.user_id) {
//         res.redirect('/login');
//     } else {
//         next();
//     }
// };

// module.exports = withAuth;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    // res.redirect('/dashboard');
  };
  
//   function isLoggedOut(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect('/');
//   }

  module.exports = isLoggedIn;