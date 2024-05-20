const mysql = require("mysql")
const util = require("util")

const db = mysql.createConnection({
    host: "a3t.h.filess.io",
    user: "FullStackJs_doingshape",
    password: "a9dcea8354178c347a42dbc0c8f5d2cb4ea0cd9f",
    database: "FullStackJs_doingshape"
})
db.connect(err => {
    err ? console.error(err) : console.log("Database connected")
})
db.query = util.promisify(db.query) ;
module.exports = db ;