/**
 *  Imports
 */
import '../../configs/env.js';
import { MongoClient } from 'mongodb';
import { logger } from '../../configs/logger.js';

// Connection String
const uri = process.env.CONNECTION_STRING;

// Database Instance
const con = new MongoClient(uri);

// Run Database
async function run() {
    try {
        const db = con.db('dand_e');
        const toons = db.collection('toons');

        // Test query
        const query = { name: 'Boxten' };
        const toon = await toons.findOne(query);

        console.log(toon);
    } finally {
        // Ensure that client closes when you finish or error
        await con.close();
    }
}
run().catch(console.dir);