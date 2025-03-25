const { UUID } = require('bson');

module.exports = class Toons {
    constructor(name, gender, pronouns) {
        this.name = name;
        this.gender = gender;
        this.pronouns = pronouns;
    }
}