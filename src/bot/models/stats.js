const { getToonId, getTwistedId } = require('../services/character.js');

module.exports = class Stats {
    constructor(data) {
        this._id = _id || null;
        this.rank = data.rank || null;
        this.health = data.health || null;
        this.skillcheck = data.skillcheck || null;
        this.speed = data.speed || null;
        this.stamina = data.stamina || null;
        this.stealth = data.stealth || null;
        this.extraction = data.extraction || null;
        this.light = data.light || null;
        this.attention = data.attention || null;
        this.detection = data.detection || null;
    };
}