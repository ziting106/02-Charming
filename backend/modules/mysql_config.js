
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: 'localhost',
  user:'root',
  password:'100610061006',
  database: 'Charming',
  connectionLimit: 10,
  waitForConnections: true,
  multipleStatements: true,
});


module.exports = pool.promise();
