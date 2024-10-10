const mysql = require("mysql2")

const pool = mysql.createConnection({
    host:process.env.HOST,
    user: process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}).promise()
async function connection(){
    await pool.connect((err)=>{
        if(err){
            throw err
        }
        console.log("MySql connected...")
    })
    pool.destroy()
    
}
module.exports = {connection,pool}