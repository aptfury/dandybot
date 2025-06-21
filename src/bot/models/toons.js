const { UUID } = require('bson');

module.exports = class Toons {
    constructor(data) {
        this._id = data._id || null;
        this.name = data.name || null;
        this.gender = data.gender || null;
        this.pronouns = data.pronouns || null;
        this.stats = data.stats || null;
        this.abilities = data.abilities || null;
        this.mastery = data.mastery || null;
        this.requirements = data.requirements || null;
        this.roles = data.roles || "No notes available"; // which general roles this toon can fill (i.e. kite, support, healer, extractor)
    };
}