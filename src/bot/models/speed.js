module.exports = class Speed {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.walk = data.walk,
        this.sprint = data.sprint,
        this.walkEvenFl = data.walkEvenFl,
        this.sprintEvenFl = data.sprintEvenFl,
        this.walkOddFl = data.walkOddFl,
        this.sprintOddFl = data.sprintOddFl,
        this.panicWalk = data.panicWalk,
        this.panicSprint = data.panicSprint,
        this.suppressWalk = data.suppressWalk,
        this.suppressSprint = data.suppressSprint
    }
}