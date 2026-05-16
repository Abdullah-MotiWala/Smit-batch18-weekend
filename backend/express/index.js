const express = require("express");
const bodyParser = require("body-parser");
const { connectDB, getDB } = require("./db.js");

const app = express();
const PORT = 5000;

const user = [];

// function ourBodyParser(req, res, next) {
//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//     const data = JSON.parse(body);
//     req.body = data;
//     next();
//   });
// }

// app.use(ourBodyParser);
// Middleware

app.use(bodyParser.json());

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send("User endpoint");
});
app.post("/user", async (req, res) => {
  const db = getDB();
  await db.collection("user").insertOne(req.body);
  res.send("User created");
});
app.delete("/user", (req, res) => {
  middleWare;
  res.send("User deleted");
});
app.patch("/user", (req, res) => {
  res.send("User updated");
});

connectDB().then(() => {
  console.log("Database Connected");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
