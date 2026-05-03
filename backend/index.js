const http = require("http");

const users = [];

const server = http.createServer((req, res) => {
  // console.log(req.method, req.url);

  if (req.url.includes("/user") && req.method === "GET") {
    const id = req.url.split("=")[1];
    const user = users.find((u) => u.id === parseInt(id));
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(user));
    return;
  }
  if (req.url.includes("/user") && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      const id = (users[users.length - 1]?.id + 1) || 1;
      users.push({ ...JSON.parse(body), id });
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(id.toString());
    });
    return;
  }
  if (req.url.includes("/user") && req.method === "DELETE") {
    const id = req.url.split("=")[1];
    const userIndex = users.findIndex((u) => u.id === parseInt(id));
    users.splice(userIndex, 1);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("User deleted");
    return;
  }
  if (req.url.includes("/user") && req.method === "PATCH") {
    const id = req.url.split("=")[1];
    const userIndex = users.findIndex((u) => u.id === parseInt(id));

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();

      users.splice(userIndex, 1, { ...JSON.parse(body), id: parseInt(id) });


      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(id.toString());
    });
    return;
  }

  if (req.url === "/login" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Login endpoint");
    return;
  }

  if (req.url === "/register" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Register endpoint");
    return;
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
