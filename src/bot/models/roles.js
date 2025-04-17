module.exports = class Roles {
    constructor(data) {
        this._id, data._id,
        this.player = data.player, // player id
        this.distract = data.distract, // boolean
        this.support = data.support, // boolean
        this.extractor = data.extractor // boolean
    }
}