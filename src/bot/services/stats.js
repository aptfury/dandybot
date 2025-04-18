const { con } = require('./connection/js');
const {
    Abilities,
    Attention,
    Debuffs,
    Detection,
    Extraction,
    Health,
    Images,
    Light,
    Mastery,
    Rank,
    Requirements,
    Research,
    Skillchecks,
    Speed,
    Stamina,
    Stats,
    Stealth,
    Strategies,
    Trinkets
} = require('../models/stats.js');

const db = con.db("dand_e");
const ability = db.collection("abilities");
const attention = db.collection("attention");
const debuff = db.collection("debuffs");
const detection = db.collection("detection");
const extraction = db.collection("extraction");
const health = db.collection("health");
const image = db.collection("images");
const light = db.collection("light");
const mastery = db.collection("masteries");
const rank = db.collection("ranks");
const ratevalue = db.collection("ratevalues");
const requirement = db.collection("requirements");
const research = db.collection("research");
const skillcheck = db.collection("skillchecks");
const speed = db.collection("speeds");
const stamina = db.collection("stamina");
const stat = db.collection("stats");
const stealth = db.collection("stealth");
const strategy = db.collection("strategies");
const trinket = db.collection("trinket");

/**
 *      CREATE
 */

/**
 * 
 * @param {Abilities} data
 * @returns
 */

/**
 * 
 * @param {Attention} data
 * @returns
 */

/**
 * 
 * @param {Debuffs} data
 * @returns
 */

/**
 * 
 * @param {Detection} data
 * @returns
 */

/**
 * 
 * @param {Extraction} data
 * @returns
 */

/**
 * 
 * @param {Health} data
 * @returns
 */

/**
 * 
 * @param {Images} data
 * @returns
 */

/**
 * 
 * @param {Light} data
 * @returns
 */

/**
 * 
 * @param {Mastery} data
 * @returns
 */

/**
 * 
 * @param {Rank} data
 * @returns
 */

/**
 * 
 * @param {Requirements} data
 * @returns
 */

/**
 * 
 * @param {Research} data
 * @returns
 */

/**
 * 
 * @param {Skillchecks} data
 * @returns
 */

/**
 * 
 * @param {Speed} data
 * @returns
 */

/**
 * 
 * @param {Stamina} data
 * @returns
 */

/**
 * 
 * @param {Stats} data
 * @returns
 */
async function createStats(data) {
    if (!data._id) return "You must include a character ID in order to add stats for a character."

    try {
        await stat.insertOne(data);
        return "Stats have been created.";
    }
    catch (e) {
        return {
            message: 'An error occurred when trying to add stats.',
            error: e
        }
    }
}

/**
 * 
 * @param {Stealth} data
 * @returns
 */

/**
 * 
 * @param {Strategies} data
 * @returns
 */

/**
 * 
 * @param {Trinkets} data
 * @returns
 */

/**
 *      READ
 */

/**
 * 
 * @param {Abilities} data
 * @returns
 */

/**
 * 
 * @param {Attention} data
 * @returns
 */

/**
 * 
 * @param {Debuffs} data
 * @returns
 */

/**
 * 
 * @param {Detection} data
 * @returns
 */

/**
 * 
 * @param {Extraction} data
 * @returns
 */

/**
 * 
 * @param {Health} data
 * @returns
 */

/**
 * 
 * @param {Images} data
 * @returns
 */

/**
 * 
 * @param {Light} data
 * @returns
 */

/**
 * 
 * @param {Mastery} data
 * @returns
 */

/**
 * 
 * @param {Rank} data
 * @returns
 */

/**
 * 
 * @param {Requirements} data
 * @returns
 */

/**
 * 
 * @param {Research} data
 * @returns
 */

/**
 * 
 * @param {Skillchecks} data
 * @returns
 */

/**
 * 
 * @param {Speed} data
 * @returns
 */

/**
 * 
 * @param {Stamina} data
 * @returns
 */

/**
 * 
 * @param {Stats} data
 * @returns
 */

/**
 * 
 * @param {Stealth} data
 * @returns
 */

/**
 * 
 * @param {Strategies} data
 * @returns
 */

/**
 * 
 * @param {Trinkets} data
 * @returns
 */

/**
 *      UPDATE
 */

/**
 * 
 * @param {Abilities} data
 * @returns
 */

/**
 * 
 * @param {Attention} data
 * @returns
 */

/**
 * 
 * @param {Debuffs} data
 * @returns
 */

/**
 * 
 * @param {Detection} data
 * @returns
 */

/**
 * 
 * @param {Extraction} data
 * @returns
 */

/**
 * 
 * @param {Health} data
 * @returns
 */

/**
 * 
 * @param {Images} data
 * @returns
 */

/**
 * 
 * @param {Light} data
 * @returns
 */

/**
 * 
 * @param {Mastery} data
 * @returns
 */

/**
 * 
 * @param {Rank} data
 * @returns
 */

/**
 * 
 * @param {Requirements} data
 * @returns
 */

/**
 * 
 * @param {Research} data
 * @returns
 */

/**
 * 
 * @param {Skillchecks} data
 * @returns
 */

/**
 * 
 * @param {Speed} data
 * @returns
 */

/**
 * 
 * @param {Stamina} data
 * @returns
 */

/**
 * 
 * @param {Stats} data
 * @returns
 */

/**
 * 
 * @param {Stealth} data
 * @returns
 */

/**
 * 
 * @param {Strategies} data
 * @returns
 */

/**
 * 
 * @param {Trinkets} data
 * @returns
 */

/**
 *      DELETE
 */

/**
 * 
 * @param {Abilities} data
 * @returns
 */

/**
 * 
 * @param {Attention} data
 * @returns
 */

/**
 * 
 * @param {Debuffs} data
 * @returns
 */

/**
 * 
 * @param {Detection} data
 * @returns
 */

/**
 * 
 * @param {Extraction} data
 * @returns
 */

/**
 * 
 * @param {Health} data
 * @returns
 */

/**
 * 
 * @param {Images} data
 * @returns
 */

/**
 * 
 * @param {Light} data
 * @returns
 */

/**
 * 
 * @param {Mastery} data
 * @returns
 */

/**
 * 
 * @param {Rank} data
 * @returns
 */

/**
 * 
 * @param {Requirements} data
 * @returns
 */

/**
 * 
 * @param {Research} data
 * @returns
 */

/**
 * 
 * @param {Skillchecks} data
 * @returns
 */

/**
 * 
 * @param {Speed} data
 * @returns
 */

/**
 * 
 * @param {Stamina} data
 * @returns
 */

/**
 * 
 * @param {Stats} data
 * @returns
 */

/**
 * 
 * @param {Stealth} data
 * @returns
 */

/**
 * 
 * @param {Strategies} data
 * @returns
 */

/**
 * 
 * @param {Trinkets} data
 * @returns
 */