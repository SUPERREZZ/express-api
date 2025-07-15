const mysql = require("mysql")
const util = require("util")

const db = mysql.createConnection({
    host: "5lty1a.h.filess.io",
    user: "fullstack_wheresnow",
    password: "bca116f00b52d5c6b89cd4773dd13a612a6e2c6a",
    database: "fullstack_wheresnow"
})
db.connect(err => {
    err ? console.error(err) : console.log("Database connected")
})
db.query = util.promisify(db.query) ;
module.exports = db ;
