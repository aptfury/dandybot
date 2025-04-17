module.exports = class Strategies {
    constructor(data) {
        this._id = data._id,
        this._topicId = data._topicId,
        this.method = data.method,
        this.source = data.source
    }
}