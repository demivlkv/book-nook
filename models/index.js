// create associations
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//allows same user to post multiple comments
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post, Comment };