const { con } = require('./database.js');
const Toons = require('./models/toons.js');

const db = con.db("dand_e");
const toon = db.collection("toons");

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

// UPDATE

// DELETE

// EXPORTS
module.exports = { createToon, readToon };