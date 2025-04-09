module.exports = class Mastery {
    constructor(data) {
        this._id = data._id,
        this._toonId = data._toonId,
        this.name = data.name,
        this.level = data.level,
        this.info = data.info
    }
}