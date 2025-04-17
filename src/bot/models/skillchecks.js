module.exports = class Skillchecks {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.chance = data.chance,
        this.size = data.size,
        this.value = data.value,
        this.subTime = data.subTime,
        this.addProgress = data.addProgress
    }
}