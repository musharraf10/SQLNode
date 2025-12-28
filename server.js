import mysql from "mysql2";
import express from "express";

const app = express();

app.use(express.json());

app.listen(8080, () => {
  console.log("Server running successfully..");
});
