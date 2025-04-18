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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
        return true;
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
    try {
        await stat.insertOne(data);
        return true;
    }
    catch (e) {
        return e;
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
        return true;
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
        return true;
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
        return true;
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
 * @param {Object} data
 * @returns
 */
async function readAbilities(data) {
    try {
        const doc = await ability.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readAttention(data) {
    try {
        const doc = await attention.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readDebuffs(data) {
    try {
        const doc = await debuff.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readDetection(data) {
    try {
        const doc = await detection.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readExtraction(data) {
    try {
        const doc = await extraction.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readHealth(data) {
    try {
        const doc = await health.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readImages(data) {
    try {
        const doc = await image.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readLight(data) {
    try {
        const doc = await light.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readMastery(data) {
    try {
        const doc = await mastery.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readRank(data) {
    try {
        const doc = await rank.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readRequirements(data) {
    try {
        const doc = await requirement.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readResearch(data) {
    try {
        const doc = await research.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readSkillchecks(data) {
    try {
        const doc = await skillcheck.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readSpeed(data) {
    try {
        const doc = await speed.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readStamina(data) {
    try {
        const doc = await stamina.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readStats(data) {
    try {
        const doc = await stat.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readStealth(data) {
    try {
        const doc = await stealth.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readStrategies(data) {
    try {
        const doc = await strategy.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function readTrinkets(data) {
    try {
        const doc = await trinket.findOne(data);
        return `\`\`\`${JSON.stringify(doc, null, 4)}\`\`\``;
    }
    catch (e) {
        return e;
    }
}

/*******************************
 *      UPDATE
 ******************************/

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateAbilities(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await ability.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateAttention(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await attention.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateDebuffs(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await debuff.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateDetection(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await detection.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateExtraction(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await extraction.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateHealth(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await health.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateImages(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await image.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateLight(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await light.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateMastery(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await mastery.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateRank(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await rank.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateRequirements(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await requirement.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateResearch(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await research.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateSkillchecks(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await skillcheck.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateSpeed(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await speed.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateStamina(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await stamina.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateStats(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await stat.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateStealth(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await stealth.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateStrategies(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await strategy.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} filter
 * @param {Object} update
 * @returns
 */
async function updateTrinkets(filter, update) {
    try {
        // { $set: { ..keys: ...values } } will need to be in the command.
        await trinket.updateOne(filter, update);
        return true;
    }
    catch (e) {
        return e;
    }
}

/*******************************
 *      DELETE
 ******************************/

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteAbilities(data) {
    try {
        await ability.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteAttention(data) {
    try {
        await attention.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteDebuffs(data) {
    try {
        await debuff.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteDetection(data) {
    try {
        await detection.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteExtraction(data) {
    try {
        await extraction.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteHealth(data) {
    try {
        await health.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteImages(data) {
    try {
        await image.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteLight(data) {
    try {
        await light.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteMastery(data) {
    try {
        await mastery.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteRank(data) {
    try {
        await rank.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteRequirements(data) {
    try {
        await requirement.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteResearch(data) {
    try {
        await research.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteSkillchecks(data) {
    try {
        await skillcheck.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteSpeed(data) {
    try {
        await speed.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteStamina(data) {
    try {
        await stamina.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteStats(data) {
    try {
        await stat.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteStealth(data) {
    try {
        await stealth.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteStrategies(data) {
    try {
        await strategy.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

/**
 * 
 * @param {Object} data
 * @returns
 */
async function deleteTrinkets(data) {
    try {
        await trinket.deleteOne(data);
        return true;
    }
    catch (e) {
        return e;
    }
}

module.exports = { createAbilities, createAttention, createDebuffs, createDetection, createExtraction, createHealth, createImages, createLight, createMastery, createRank, createRequirements, createResearch, createSkillchecks, createSpeed, createStamina, createStats, createStealth, createStrategies, createTrinkets, readAbilities, readAttention, readDebuffs, readDetection, readExtraction, readHealth, readImages, readLight, readMastery, readRank, readRequirements, readResearch, readSkillchecks, readSpeed, readStamina, readStats, readStealth, readStrategies, readTrinkets, updateAbilities, updateAttention, updateDebuffs, updateDetection, updateExtraction, updateHealth, updateImages, updateLight, updateMastery, updateRank, updateRequirements, updateResearch, updateSkillchecks, updateSpeed, updateStamina, updateStats, updateStealth, updateStrategies, updateTrinkets, deleteAbilities, deleteAttention, deleteDebuffs, deleteDetection, deleteExtraction, deleteHealth, deleteImages, deleteLight, deleteMastery, deleteRank, deleteRequirements, deleteResearch, deleteSkillchecks, deleteSpeed, deleteStamina, deleteStats, deleteStealth, deleteStrategies, deleteTrinkets }