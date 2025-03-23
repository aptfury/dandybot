/**
 *  Imports
 */
require('dotenv').config();
const { MongoClient } = require('mongodb');
const { UUID } = require('bson');

// Connection String
const uri = process.env.CONNECTION_STRING;

// Database Instance
const con = new MongoClient(uri, {
    pkFactory: {
        createPk: () => new UUID().toBinary()
    },
    connectTimeoutMS: 10000,
});

module.exports = { con };