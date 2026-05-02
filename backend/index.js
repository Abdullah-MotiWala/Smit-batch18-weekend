const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url === "/login" && req.method === "POST") {
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
// console.log(server);
// // Start server

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


patch