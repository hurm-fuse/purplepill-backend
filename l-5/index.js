const { createServer } = require("node:http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 4000;

// HTML files read kar rahe hain
const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const service = fs.readFileSync("./service.html");
const contact = fs.readFileSync("./contact.html");

const server = createServer((req, res) => {
    const url = req.url;

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (url === "/") {
        res.statusCode = 200;
        res.end(home);

    } else if (url === "/about") {
        res.statusCode = 200;
        res.end(about);

    } else if (url === "/service") {
        res.statusCode = 200;
        res.end(service);

    } else if (url === "/contact") {
        res.statusCode = 200;
        res.end(contact);

    } else {
        res.statusCode = 404;
        res.end("<h1>404 Error: Page Not Found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});