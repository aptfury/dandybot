/**
 * This class is used for STAMINA, STEALTH, LIGHT, ATTENTION, and HEALTH.
 * 
 * Others may be included, but so far those are the only table types that have a id, rating, and value.
 */

module.exports = class RateValue {
    constructor(data) {
        this._id = data._id,
        this.rating = data.rating,
        this.value = data.value
    }
}