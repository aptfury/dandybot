const sequelize = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: sequelize.STRING,
        primary_key: true
    },
    name: sequelize.STRING
})