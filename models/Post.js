// create Post Model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//define post model
class Post extends Model {}


//define columns in Post

Post.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true
        }, 
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        author: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        lexile_level: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        genre: {
            type: DataTypes.TEXT, 
            allowNull: false
        },
        post_text: {
            type: DataTypes.TEXT, 
            allowNull: false,
            validate: {
                len: [1]
            }
        }, 
        user_id: {
            type: DataTypes.INTEGER, 
            references: {
                model: 'user', 
                key: 'id'
            }
        }
    }, 
    {
        sequelize, 
        freezeTableName: true, 
        underscored: true, 
        modelName: 'post'
    }
);

module.exports = Post;