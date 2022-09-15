// create associations
const User = require('./User');
const Post = require('./Post');

//allows same user to post multiple comments
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };