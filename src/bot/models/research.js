module.exports = class Research {
    constructor(data) {
        this._id = data._id,
        this._twistedId = data._twistedId,
        this.type = data.type,
        this.description = data.description,
        this.trinket = data.trinket
    }
}