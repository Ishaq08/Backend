const mysql = require('mysql2');
require ('dotenv').config();

const db = mysql.createConnection({
  host:process.env.host,
  user:process.env.uname,
  password:process.env.password,
  database:process.env.database,
//   port: process.env.port,npm
});
db.connect((err) => {
    if (err) {
        console.log("error");
    } else {
        console.log("connected to DataBase");
    }
})  // connect to database

// get data from database
const sql = "select * from products;"
db.query(sql, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
})

const anotherQuery = "select * from `order` where pid =? And uid =?;";
db.query(anotherQuery, [3,1], (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
})

// insert
const pname = "laptop";
const pdec = "levona";
const pprice = 100;
const insertQuery = "insert into products (pname, pdec, pprice) values (?,?,?);";
// db.query(insertQuery, [pname, pdec, pprice], (err, results) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(results);
//     }
// })

//delete
const del = "delete from products where pid =5"
// db.query(del, (err, results) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(results);
//     }
// })

//updata
const Pname = "TV"
const pID = 1
const updata = `UPDATE products SET pname =${Pname} WHERE pid =${pID};`
db.query(updata, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
})