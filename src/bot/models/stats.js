const { getToonId, getTwistedId } = require('../services/character.js');

module.exports = class Stats {
    constructor(name, rank, health, skillcheck, speed, stamina, stealth, extraction, light, attention, detection) {
        this.id = getId();
        this.name = name;
        this.rank = rank;
        this.health = health;
        this.skillcheck = skillcheck;
        this.speed = speed;
        this.stamina = stamina;
        this.stealth = stealth;
        this.extraction = extraction;
        this.light = light;
        this.attention = attention || 0;
        this.detection = detection || 0;
    }

    getId() {
        this.attention === 0 && this.detection === 0 ?
        getToonId(this.name)
        .then(id => {
            if (typeof id === 'object') throw new Error(id["error"]);

            return id;
        })
        .catch(e => {
            /**
             * FIXME:
             *      (1) change to an error report through discord and/or logger when possible.
             */
            console.log(e);
        }) :
        getTwistedId(this.name)
        .then(id => {
            if (typeof id === 'object') throw new Error(id["error"]);

            return id;
        })
        .catch(e => {
            /**
             * FIXME:
             *      (1) change to an error report through discord and/or logger when possible.
             */
            console.log(e);
        })
    }
}