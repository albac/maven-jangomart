const pg = require("pg");
const express = require("express");
const app = express();
const port = 8080;

console.log("The value of User is:", process.env.POSTGRES_USER);
console.log("The value of DB is:", process.env.POSTGRES_DBNAME);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
