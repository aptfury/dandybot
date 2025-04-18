const { con } = require('./connection.js');
const Toons = require('../models/toons.js');
const Twisteds = require('../models/twisteds.js');

const db = con.db("dand_e");
const toon = db.collection("toons");
const twisted = db.collection("twisted");

// CREATE
/**
 * 
 * @param {Toons} info 
 * @returns 
 */
async function createToon(info) {
    const doc = info;

    if (!doc.name) return "You must include a name in order to add a Toon to the database.";

    try {
        await toon.insertOne(doc);
        return `${doc.name} has been added to the database.`
    }
    catch (e) {
        return {
            message: `An error occured when trying to add ${doc.name} to the database.`,
            error: e
        }
    }
}

/**
 * 
 * @param {Twisteds} info 
 * @returns 
 */
async function createTwisted(info) {
    const doc = info;

    if (!doc.name) return "You must include a name in order to add a Twisted to the database.";

    try {
        await twisted.insertOne(doc);
        return `${doc.name} has been added to the database.`;
    }
    catch (e) {
        return {
            message: `An error occured when trying to add ${doc.name} to the database.`,
            error: e
        }
    }
}

// READ
/**
 * 
 * @param {Object} info 
 * @param {Toons} doc
 * @returns 
 */
async function readToon(info) {
    const filter = info;

    try {
        const doc = await toon.findOne(filter);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return {
            message: `There was an error retrieving this information.`,
            error: e
        }
    }
}

/**
 * 
 * @param {Object} info
 * @param {Twisteds} doc
 * @returns 
 */
async function readTwisted(info) {
    const filter = info;

    try {
        const doc = await twisted.findOne(filter);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return {
            message: `There was an error retrieving this information.`,
            error: e
        }
    }
}

/**
 * 
 * @param {String} info 
 * @param {Toons} doc
 * @returns 
 */
async function getToonId(info) {
    const filter = { name: info };

    try {
        const doc = await toon.findOne(filter);

        return doc._id;
    }
    catch (e) {
        return {
            message: `There was an error finding that toon.`,
            error: e
        }
    }
}

/**
 * 
 * @param {String} info
 * @param {Twisteds} doc
 * @returns
 */
async function getTwistedId(info) {
    const filter = { name: info };

    try {
        const doc = await twisted.findOne(filter);

        return doc._id;
    }
    catch (e) {
        return {
            message: `There was an error finding that twisted.`,
            error: e
        }
    }
}

// UPDATE
/**
 * 
 * @param {String} name
 * @param {Object} update
 * @returns
 */
async function updateToon(name, update) {
    const filter = { name: name };
    const changes = { $set: update };

    try {
        await toon.updateOne(filter, changes);
        return 'Update complete. Please use the find command to view the toon and ensure the edits were successful.';
    }
    catch (e) {
        return {
            message: `There was an error editing that toon.`,
            error: e
        }
    }
}

/**
 * 
 * @param {String} name
 * @param {Object} update
 * @returns 
 */
async function updateTwisted(name, update) {
    const filter = { name: name };
    const changes = { $set: update };

    try {
        await twisted.updateOne(filter, changes);
        return 'Update complete. Please use the find command to view the twisted and ensure the edits were successful.';
    }
    catch (e) {
        return {
            message: `There was an error editing that twisted.`,
            error: e
        }
    }
}

// DELETE
/**
 * 
 * @param {String} name
 * @returns 
 */
async function deleteToon(name) {
    const filter = { name: name };

    try {
        await toon.deleteOne(filter);
        await twisted.deleteOne(filter);
        return 'Deleted. Please use the find command to ensure the toon no longer exists.';
    }
    catch (e) {
        return {
            message: 'There was an error deleting that toon.',
            error: e
        }
    }
}

// EXPORTS
module.exports = { createToon, readToon, getToonId, createTwisted, getTwistedId, readTwisted, updateToon, updateTwisted, deleteToon };