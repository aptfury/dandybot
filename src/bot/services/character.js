const { con } = require('./connection.js');
const Toons = require('../models/toons.js');
const Twisteds = require('../models/twisteds.js');
const Stats = require('../models/stats.js');

const db = con.db("dand_e");
const toon = db.collection("toons");
const twisted = db.collection("twisted");
const statistics = db.collection("stats");

// CREATE
/**
 * 
 * @param {Toons} info 
 */
async function createToon(info) {
    const doc = info;

    if (!doc.name) return "You must include a name in order to add a Toon to the database.";

    try {
        const result = await toon.insertOne(doc);
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
 * @param {Twisteds} info 
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

/**
 * 
 * @param {Stats} stats 
 */
function createToonStats(stats) {
    new result = new Promise((resolve, reject) => {
        if (!stats.id || typeof stats.id === 'object') reject(`We were not able to add these stats to the toon. Please make sure they are already in the database before trying to update their stats.`);
        if (!stats.name) reject(`There wasn't a toon with that name in the database.`);

        try {
            stats.insertOne(stats);
            resolve(`You have successfully updated ${stats.name}'s stats in the database.`);
        }
        catch (e) {
            reject({
                message: `An error occured when trying to add ${stats.name}'s stats to the database.`,
                error: e
            });
        }
    })
    .then(data => data, e => e)
    .catch(e => console.error(e));

    return result;
}

/**
 * 
 * @param {Stats} stats
 */
function createTwistedStats(stats) {
    new result = new Promise((resolve, reject) => {
        if (!stats.id || typeof stats.id === 'object') reject(`We were not able to add these stats to the twisted. Please make sure they are already in the database before trying to update their stats.`);
        if (!stats.name) reject(`There wasn't a twisted with that name in the database.`);

        try {
            statistics.insertOne(stats);
            resolve(`You have successfully updated ${stats.name}'s stats to the database.`);
        }
        catch (e) {
            reject({
                message: `An error occured when trying to add ${stats.name}'s stats to the database.`,
                error: e
            })
        }
    })
    .then(data => data, e => e)
    .catch(e => console.error(e));

    return result;
}

// READ
/**
 * 
 * @param {Object} info 
 */
async function readToon(info) {
    const filter = info;

    try {
        /**
         * TODO:
         *      (1) Have this return the class instead of the document?
         */
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

// DELETE

// EXPORTS
module.exports = { createToon, readToon, getToonId, createToonStats, createTwisted, getTwistedId, createTwistedStats };