module.exports = class Extraction {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.value = data.value,
        this.evenFl = data.evenFl,
        this.oddFl = data.oddFl
    }
}