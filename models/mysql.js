/*async function connect(){
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://b369ccda6cdb36:b448b2ca@us-cdbr-east-06.cleardb.net/heroku_bcabcb5d5301a5b?reconnect=true");
    global.connection = connection;
    return connection;
}*/

var pool = undefined;

async function connect() {
    const mysql = require('mysql2/promise');
    if(pool){
        return pool;
    }
    pool = await mysql.createPool({
        host: 'us-cdbr-east-06.cleardb.net',
        port: 3306,
        user: 'b369ccda6cdb36',
        password: 'b448b2ca',
        database: 'heroku_bcabcb5d5301a5b',
        connectionLimit: 8,
        waitForConnections: true
    });
    return pool;
}

async function query(sql) {
    const conn = await connect();
    const [rows] = await conn.query(sql);
    return rows;
}

module.exports = { query };