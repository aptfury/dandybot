module.exports = class Images {
    constructor(data) {
        this._id = data._id,
        this._itemId = data._itemId,
        this.blob = data.blob,
        this.bitarray = data.bitarray,
        this.url = data.url
    }
}