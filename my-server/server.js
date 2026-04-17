const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = "index.html";

  if (req.url !== "/") {
    filePath = req.url.substring(1);
  }

  const ext = path.extname(filePath);

  let contentType = "text/html";
  if (ext === ".js") contentType = "application/javascript";
  if (ext === ".css") contentType = "text/css";
  if (ext === ".wasm") contentType = "application/wasm";
  if (ext === ".data") contentType = "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
