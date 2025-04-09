module.exports = class Items {
    constructor(data) {
        this._id = data._id, // Item's ID
        this.name = data.name, // Item's name
        this.type = data.type, // Item's type
        this.rarity = data.rarity, // Item's rarity
        this.effect = data.effect, // Item's effect
        this.shop = data.shop // Is item from shop
    }
}