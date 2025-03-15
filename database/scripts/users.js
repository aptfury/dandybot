const { server } = require('../connect.js');
const { User } = require('../models/user.js');

const addUser = async (id, username) => {
    try {
        await server.transaction(async (db) => {
            const user = await User.create(
                {
                    id: id,
                    username: username
                },
                { transaction: db },
            );
            
            return user;
        });
    }
    catch (e) {
        console.log(e);
    }
}

const viewUsers = async () => {
    const users = await User.findAll();
    return JSON.stringify(users, null, 2);
}

module.exports = { addUser, viewUsers };