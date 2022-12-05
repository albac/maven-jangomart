// Server JS

const { Client } = require("pg");
const express = require("express");
const app = express();
const port = 5000;

console.log("The value of User is:", process.env.POSTGRES_USER);
console.log("The value of DB is:", process.env.POSTGRES_HOST);
console.log("The value of DB is:", process.env.POSTGRES_DBNAME);

const client = new Client({
  password: process.env.POSTGRES_PASSWORD,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
});

app.use(express.static("public"));

app.get("/employees", async (req, res) => {
  const results = await client
    .query("SELECT * FROM employees")
    .then((payload) => {
      return payload.rows;
    })
    .catch(() => {
      throw new Error("Query failed");
    });
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(JSON.stringify(results));
});

(async () => {
  await client.connect();

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
})();
