const { Sequelize } = require('sequelize');

exports.server = new Sequelize({
    dialect: 'sqlite',
    storage: './storage/server.db'
});

exports.admin = new Sequelize({
    dialect: 'sqlite',
    storage: './storage/admin.db'
});