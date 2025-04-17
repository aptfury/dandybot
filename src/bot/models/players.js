module.exports = class Players {
    constructor(data) {
        this._id = data._id,
        this.username = data.username,
        this.roblox = data.roblox,
        this.info = data.info
    }
}