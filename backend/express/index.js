const express = require("express");
const app = express();
const PORT = 5000;

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send("User endpoint");
});
app.post("/user", (req, res) => {
  res.send("User created");
});
app.delete("/user", (req, res) => {
  res.send("User deleted");
});
app.patch("/user", (req, res) => {
  res.send("User updated");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
