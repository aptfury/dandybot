const { DataTypes } = require('sequelize');
const { server } = require('../connect.js');

const User = server.define(
    'User',
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        server,
        tableName: 'Users',
        timestamps: false
    }
);

new Promise((res, rej) => {
    try {
        User.sync({ force: true });
        res('Table and model have been created.');
    }
    catch (e) {
        rej(e);
    }
}).then(
    (data) => console.log(data),
    (e) => console.error(e)
);

module.exports = { User };