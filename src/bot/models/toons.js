const { UUID } = require('bson');
const Stats = require('./stats.js');

module.exports = class Toons {
    constructor(data) {
        this._id = data._id || null;
        this.name = data.name || null;
        this.gender = data.gender || null;
        this.pronouns = data.pronouns || null;
        this.stats = Stats;
    };
}