const { UUID } = require('bson');
const Stats = require('./stats.js');
const { createToon, createTwisted, readTwisted } = require('../services/character.js');

module.exports = class Twisteds {
    constructor(data) {
        this._id = data._id || null;
        this.name = data.name || null;
        this.stats = Stats;
    };
}