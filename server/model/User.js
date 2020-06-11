const db = require('../Database/db');
const Sequelize = require("sequelize")

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING

        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        created: {
            type: db.Sequelize.TIME,
            defaultValue: Sequelize.NOW
        }
        
        
    },
    {
        timestamps: false
    }

);