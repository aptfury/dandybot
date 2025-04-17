module.exports = class Teams {
    constructor(data) {
        this._id = data._id,
        this.name = data.name, // team name
        this.player = data.player // player discord id
    }
}