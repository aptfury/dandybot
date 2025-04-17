module.exports = class Trinkets {
    constructor(data) {
        this._id = data._id,
        this.name = data.name,
        this.type = data.type,
        this.twisted = data.twisted,
        this.effect = data.effect,
        this.holiday = data.holiday,
        this.other = data.other
    }
}