const { con } = require('../services/connection.js');
const Floors = require('../models/floors.js');
const Mains = require('../models/mains.js');
const PlayerRecords = require('../models/playerRecords.js');
const Players = require('../models/players.js');
const Roles = require('../models/roles.js');
const TeamRecords = require('../models/teamRecords.js');
const Teams = require('../models/teams.js');

const db = con.db("dand_e");
const floor = db.collection("floors");
const main = db.collection("mains");
const playerRecord = db.collection("playerrecords");
const player = db.collection("players");
const role = db.collection("roles");
const teamRecord = db.collection("teamrecords");
const team = db.collection("teams");

/*******************************
 *      CREATE
 ******************************/

/**
 * 
 * @param {Floors} data
 * @returns
 */
async function createFloors(data) {
    try {
        await floor.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Mains} data
 * @returns
 */
async function createMains(data) {
    try {
        await main.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {PlayerRecords} data
 * @returns
 */
async function createPlayerRecords(data) {
    try {
        await playerRecord.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Players} data
 * @returns
 */
async function createPlayers(data) {
    try {
        await player.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Roles} data
 * @returns
 */
async function createRoles(data) {
    try {
        await role.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {TeamRecords} data
 * @returns
 */
async function createTeamRecords(data) {
    try {
        await teamRecord.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Teams} data
 * @returns
 */
async function createTeams(data) {
    try {
        await team.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/*******************************
 *      READ
 ******************************/

/**
 * @param {Object} data
 * @returns
 */
async function readFloors(data) {
    try {
        const doc = await floor.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * @param {Object} data
 * @returns
 */
async function readMains(data) {
    try {
        const doc = await main.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * @param {Object} data
 * @returns
 */
async function readPlayerRecords(data) {
    try {
        const doc = await playerRecord.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * @param {Object} data
 * @returns
 */
async function readPlayers(data) {
    try {
        const doc = await player.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * @param {Object} data
 * @returns
 */
async function readRoles(data) {
    try {
        const doc = await role.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * @param {Object} data
 * @returns
 */
async function readTeamRecords(data) {
    try {
        const doc = await teamRecord.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * @param {Object} data
 * @returns
 */
async function readTeams(data) {
    try {
        const doc = await team.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/*******************************
 *      UPDATE
 ******************************/

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateFloors(filter, update) {
    try {
        // { $set: { ...keys: ...values } } will need to be in the command.
        await floor.updateOne(filter, update);
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
async function updateMains(filter, update) {
    try {
        // { $set: { ...keys: ...values } } will need to be in the command.
        await main.updateOne(filter, update);
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
async function updatePlayerRecords(filter, update) {
    try {
        // { $set: { ...keys: ...values } } will need to be in the command.
        await playerRecord.updateOne(filter, update);
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
async function updatePlayers(filter, update) {
    try {
        // { $set: { ...keys: ...values } } will need to be in the command.
        await player.updateOne(filter, update);
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
async function updateRoles(filter, update) {
    try {
        // { $set: { ...keys: ...values } } will need to be in the command.
        await role.updateOne(filter, update);
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
async function updateTeamRecords(filter, update) {
    try {
        // { $set: { ...keys: ...values } } will need to be in the command.
        await teamRecord.updateOne(filter, update);
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
async function updateTeams(filter, update) {
    try {
        // { $set: { ...keys: ...values } } will need to be in the command.
        await team.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/*******************************
 *      DELETE
 ******************************/

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteFloors(data) {
    try {
        await floor.deleteOne(data);
        return true;
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
async function deleteMains(data) {
    try {
        await main.deleteOne(data);
        return true;
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
async function deletePlayerRecords(data) {
    try {
        await playerRecord.deleteOne(data);
        return true;
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
async function deletePlayers(data) {
    try {
        await player.deleteOne(data);
        return true;
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
async function deleteRoles(data) {
    try {
        await role.deleteOne(data);
        return true;
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
async function deleteTeamRecords(data) {
    try {
        await teamRecord.deleteOne(data);
        return true;
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
async function deleteTeams(data) {
    try {
        await team.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

module.exports = { createFloors, createMains, createPlayerRecords, createPlayers, createRoles, createTeamRecords, createTeams, readFloors, readMains, readPlayerRecords, readPlayers, readRoles, readTeamRecords, readTeams, updateFloors, updateMains, updatePlayerRecords, updatePlayers, updateRoles, updateTeamRecords, updateTeams, deleteFloors, deleteMains, deletePlayerRecords, deletePlayers, deleteRoles, deleteTeamRecords, deleteTeams };