const { con } = require('./connection.js');
const Toons = require('../models/toons.js');
const Twisteds = require('../models/twisteds.js');

const db = con.db("dand_e");
const toon = db.collection("toons");
const twisted = db.collection("twisted");

// CREATE
/**
 * 
 * @param {Toons} data 
 * @returns 
 */
async function createToon(data) {
    try {
        await toon.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Twisteds} data 
 * @returns 
 */
async function createTwisted(data) {
    try {
        await twisted.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

// READ
/**
 * 
 * @param {Object} data 
 * @returns 
 */
async function readToon(data) {
    try {
        const doc = await toon.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns 
 */
async function readTwisted(data) {
    try {
        const doc = await twisted.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {String} data 
 * @param {Toons} doc
 * @returns 
 */
async function getToonId(data) {
    try {
        const doc = await toon.findOne(data);

        return doc._id;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {String} data
 * @param {Twisteds} doc
 * @returns
 */
async function getTwistedId(data) {
    try {
        const doc = await twisted.findOne(data);

        return doc._id;
    }
    catch (e) {
        return e;
    }
}

// UPDATE
/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateToon(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await toon.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns 
 */
async function updateTwisted(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await twisted.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

// DELETE
/**
 * 
 * @param {Object} data
 * @returns 
 */
async function deleteToon(data) {
    try {
        await toon.deleteOne(data);
        await twisted.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

// EXPORTS
module.exports = { createToon, readToon, getToonId, createTwisted, getTwistedId, readTwisted, updateToon, updateTwisted, deleteToon };