module.exports = class Detection {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.direct = data.direct,
        this.peripheral = data.peripheral
    }
}