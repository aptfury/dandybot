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
        main_toon: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        db,
        tableName: 'Users',
        timestamps: false,
    }
);

const DandyToon = db.define(
    'DandyToon',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        hearts: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        skillcheck: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        movement_speed: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        stamina: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        stealth: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        extraction_speed: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        ability_name: {
            type: DataTypes.STRING,
            defaultValue: "Unknown",
            allowNull: false
        },
        ability_type: {
            type: DataTypes.STRING,
            defaultValue: "Unknown",
            allowNull: false
        },
        ability_description: {
            type: DataTypes.TEXT,
            defaultValue: "Unknown",
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
    },
    {
        db,
        tableName: 'DandyToons',
        timestamps: false,
    }
);

const DandyTwisted = db.define(
    'DandyTwisted',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        threat: {
            type: DataTypes.ENUM('Common', 'Uncommon', 'Rare', 'Main', 'Lethal', 'Unknown'),
            defaultValue: 'Unknown',
            allowNull: false
        },
        kiting_difficulty: {
            type: DataTypes.ENUM('Normal', 'Medium', 'High', 'Unknown'),
            defaultValue: 'Unknown',
            allowNull: false
        },
        movement_speed: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        sight: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        attention_span: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        ability_name: {
            type: DataTypes.STRING,
            defaultValue: 'Unknown',
            allowNull: false
        },
        ability_cooldown: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        ability_description: {
            type: DataTypes.TEXT,
            defaultValue: 'Unknown',
            allowNull: false
        },
        info: {
            type: DataTypes.TEXT,
            defaultValue: 'Unknown',
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        }
    },
    {
        db,
        tableName: 'DandyTwisteds',
        timestamps: false
    }
)

module.exports = { User, DandyToon, DandyTwisted };