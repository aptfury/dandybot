module.exports = class Store {
    constructor(data) {
        this._id = data._id,
        this._itemId = data._itemId,
        this.normal = data.normal,
        this.discount10 = data.discount10,
        this.discount50 = data.discount50,
        this.discount60 = data.discount60,
        this.ichor = data.ichor,
        this.tapes = data.tapes
    }
}