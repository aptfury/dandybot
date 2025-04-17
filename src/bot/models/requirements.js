module.exports = class Requirements {
    constructor(data) {
        this._id = data._id,
        this._itemId = data._itemId,
        this.requirement = data.requirement
    }
}