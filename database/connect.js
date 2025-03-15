const { Sequelize } = require('sequelize');

exports.admin = new Sequelize({
    dialect: 'sqlite',
    storage: './storage/admin.db'
});

exports.server = new Sequelize({
    dialect: 'sqlite',
    storage: './storage/server.db'
});