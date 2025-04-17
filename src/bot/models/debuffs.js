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