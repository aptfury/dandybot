const { con } = require('../services/connection.js');
const { Abilities, Attention, Debuffs, Detection, Extraction, Health, Images, Light, Mastery, Rank, Requirements, Research, Skillchecks, Speed, Stamina, Stats, Stealth, Strategies, Trinkets } = require('../models/stats.js');

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

/*******************************
 *      CREATE
 ******************************/

/**
 * 
 * @param {Abilities} data
 * @returns
 */
async function createAbilities(data) {
    try {
        await ability.insertOne(data);
        return true;
    }
    catch (e) {
        return e
    }
}

/**
 * 
 * @param {Attention} data
 * @returns
 */
async function createAttention(data) {
    try {
        await attention.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Debuffs} data
 * @returns
 */
async function createDebuffs(data) {
    try {
        await debuff.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Detection} data
 * @returns
 */
async function createDetection(data) {
    try {
        await detection.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Extraction} data
 * @returns
 */
async function createExtraction(data) {
    try {
        await extraction.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Health} data
 * @returns
 */
async function createHealth(data) {
    try {
        await health.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Images} data
 * @returns
 */
async function createImages(data) {
    try {
        await image.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Light} data
 * @returns
 */
async function createLight(data) {
    try {
        await light.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Mastery} data
 * @returns
 */
async function createMastery(data) {
    try {
        await mastery.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Rank} data
 * @returns
 */
async function createRank(data) {
    try {
        await rank.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Requirements} data
 * @returns
 */
async function createRequirements(data) {
    try {
        await requirement.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Research} data
 * @returns
 */
async function createResearch(data) {
    try {
        await research.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Skillchecks} data
 * @returns
 */
async function createSkillchecks(data) {
    try {
        await skillcheck.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Speed} data
 * @returns
 */
async function createSpeed(data) {
    try {
        await speed.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Stamina} data
 * @returns
 */
async function createStamina(data) {
    try {
        await stamina.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

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
async function createStealth(data) {
    try {
        await stealth.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Strategies} data
 * @returns
 */
async function createStrategies(data) {
    try {
        await strategy.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Trinkets} data
 * @returns
 */
async function createTrinkets(data) {
    try {
        await trinket.insertOne(data);
    }
    catch (e) {
        return e;
    }
}

/*******************************
 *      READ
 ******************************/

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

/*******************************
 *      UPDATE
 ******************************/

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

/*******************************
 *      DELETE
 ******************************/

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