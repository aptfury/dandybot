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

/*******************************
 *      READ
 ******************************/

/*******************************
 *      UPDATE
 ******************************/

/*******************************
 *      DELETE
 ******************************/

module.exports = {};