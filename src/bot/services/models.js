const { Sequelize, DataTypes, UUIDV4 } = require('sequelize');
const db = new Sequelize({
    dialect: 'sqlite',
    database: 'src/databases/dandy.db'
});

const User = db.define(
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
        },
    },
    {
        db,
        tableName: 'Users',
        timestamps: false,
    }
);

const DandyPlayable = db.define(
    'DandyPlayable',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        hearts: DataTypes.STRING,
        skillcheck: DataTypes.STRING,
        movement_speed: DataTypes.STRING,
        stamina: DataTypes.STRING,
        stealth: DataTypes.STRING,
        extraction_speed: DataTypes.STRING,
        ability_name: DataTypes.STRING,
        ability_type: DataTypes.STRING,
        ability_description: DataTypes.TEXT
    },
    {
        db,
        tableName: 'DandyPlayables',
        timestamps: false,
    }
);

module.exports = { User, DandyPlayable };