// middleware for user authentication
module.exports = function(req, res, next) {
    if (req.session.user.id) {
        return next();
    }
    return res.redirect('/');
};