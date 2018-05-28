const mysql = require("mysql");
const { database } = require("../../config");

const pool = mysql.createPool({
  host    : database.HOST,
  user    : database.USERNAME,
  password: database.PASSWORD,
  database: database.DATABASE
});


let query = (sql, value) => {
    return new Promise((resolve, reject) => {

        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {

                connection.query(sql, value, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {

                        resolve(rows);
                    }

                    connection.release();
                })
            }
        });
    });
};

module.exports = {
    query
};