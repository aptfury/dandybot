const { getToonId, getTwistedId } = require('../services/character.js');

module.exports = class Abilities {
    constructor(data) {
        this._id = data._id,
        this._toonId = data._toonId,
        this.name = data.name,
        this.type = data.type,
        this.info = data.info
    }
}

module.exports = class Attention {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.value = data.value
    }
}

module.exports = class Debuffs {
    constructor(data) {
        this._id = data._id,
        this._twistedId = data._twistedId,
        this.level = data.level,
        this.twisted = data.twisted,
        this.power = data.power,
        this.info = data.info
    }
}

module.exports = class Detection {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.direct = data.direct,
        this.peripheral = data.peripheral
    }
}

module.exports = class Extraction {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.value = data.value,
        this.evenFl = data.evenFl,
        this.oddFl = data.oddFl
    }
}

module.exports = class Health {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.value = data.value
    }
}

module.exports = class Images {
    constructor(data) {
        this._id = data._id,
        this._itemId = data._itemId,
        this.blob = data.blob,
        this.bitarray = data.bitarray,
        this.url = data.url
    }
}

module.exports = class Light {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.value = data.value
    }
}

module.exports = class Mastery {
    constructor(data) {
        this._id = data._id,
        this._toonId = data._toonId,
        this.name = data.name,
        this.level = data.level,
        this.info = data.info
    }
}

module.exports = class Rank {
    constructor(data) {
        this._id = data._id,
        this.type = data.type
    }
}

module.exports = class Requirements {
    constructor(data) {
        this._id = data._id,
        this._itemId = data._itemId,
        this.requirement = data.requirement
    }
}

module.exports = class Research {
    constructor(data) {
        this._id = data._id,
        this._twistedId = data._twistedId,
        this.type = data.type,
        this.description = data.description,
        this.trinket = data.trinket
    }
}

module.exports = class Skillchecks {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.chance = data.chance,
        this.size = data.size,
        this.value = data.value,
        this.subTime = data.subTime,
        this.addProgress = data.addProgress
    }
}

module.exports = class Speed {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.walk = data.walk,
        this.sprint = data.sprint,
        this.walkEvenFl = data.walkEvenFl,
        this.sprintEvenFl = data.sprintEvenFl,
        this.walkOddFl = data.walkOddFl,
        this.sprintOddFl = data.sprintOddFl,
        this.panicWalk = data.panicWalk,
        this.panicSprint = data.panicSprint,
        this.suppressWalk = data.suppressWalk,
        this.suppressSprint = data.suppressSprint
    }
}

module.exports = class Stamina {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.value = data.value
    }
}

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

module.exports = class Stealth {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.value = data.value
    }
}

module.exports = class Strategies {
    constructor(data) {
        this._id = data._id,
        this._topicId = data._topicId,
        this.method = data.method,
        this.source = data.source
    }
}

module.exports = class Trinkets {
    constructor(data) {
        this._id = data._id,
        this.name = data.name,
        this.type = data.type,
        this.twisted = data.twisted,
        this.effect = data.effect,
        this.holiday = data.holiday,
        this.other = data.other
    }
}