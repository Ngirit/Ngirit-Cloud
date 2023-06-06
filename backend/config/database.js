require('dotenv').config()
var mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_NAME,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    port: process.env.DB_PORT
})

db.connect((err)=>{
    if(err) throw err
    console.log('MySQL is connected')
})

module.exports = db