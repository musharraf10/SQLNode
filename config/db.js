import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "learning",
  port: 3306,
});

db.connect((err) => {
  if (err) console.log(err.message);
  console.log("SQL Connected...");
  return;
});

export default db;
