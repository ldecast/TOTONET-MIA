const oracledb = require('oracledb');

let connection;

module.exports = {
    init: async () => {
        try {
            connection = await oracledb.getConnection({
                user: "root",
                password: "123456789",
                connectString: "oracle-54058-0.cloudclusters.net:16104/XE"

            });
            console.log('connected to database');
        } catch (err) {
            console.error(err.message);
            connection = false;
        }
        return connection;
    },
    get: () => {
        if (!connection) {
            throw new Error("Connection is not initialized");
        }
        return connection;
    },
    close: async () => {
        // Always close connections
        try {
            await connection.close();
            console.log('close connection success');
        } catch (err) {
            console.error(err.message);
        }
    }
};
