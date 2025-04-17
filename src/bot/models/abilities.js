module.exports = class Abilities {
    constructor(data) {
        this._id = data._id,
        this._toonId = data._toonId,
        this.name = data.name,
        this.type = data.type,
        this.info = data.info
    }
}