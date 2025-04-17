module.exports = class PlayerRecords {
    constructor(data) {
        this._id = data._id,
        this.player = data.player,
        this.toon = data.toon,
        this.time = data.time,
        this.floor = data.floor,
        this.role = data.role,
        this.ichor = data.ichor,
        this.tapes = data.tapes,
        this.notes = data.notes
    }
}