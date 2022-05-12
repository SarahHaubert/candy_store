const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost', 
    database: 'candy_store', 
    password: 'sarah', 
    port: 5432
});

module.exports = pool;