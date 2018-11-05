const mysql = require("./mysql");

// insert user
async function insertUser(name, icon, age, content, description) {
    let sql = `INSERT INTO user (name, icon, age, content, description) VALUES ("${name}", "${icon}","${age}", "${content}", "${description}")`;
    return await mysql.query(sql);
};

// updata user
// retrieve user
async function retrieveUsers() {
    let sql = "SELECT * FROM user";
    return await mysql.query(sql);
};
// delete user
module.exports = { 
    insertUser,
    retrieveUsers
 };