const { UUID } = require('bson');

module.exports = class Twisteds {
    constructor(data) {
        this._id = data._id || null;
        this.name = data.name || null;
        this.stats = data.stats || null;
        this.trinket = data.trinket || null;
        this.notes = data.notes || "No notes available";
    };
}