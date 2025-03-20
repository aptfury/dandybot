function ifTableExists(db, tableName) {
    const query = db.getQueryInterface(); // Initialize query interface

    return query.tableExists(tableName)
}

module.exports = { ifTableExists };