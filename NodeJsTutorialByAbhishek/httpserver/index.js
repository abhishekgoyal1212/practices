const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/userapi/userapi.json`, "utf-8");
const decode = JSON.parse(data);

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('<h1> Hello Welcome To Home Us Page </h1>');
    } else if (req.url == '/contactUs') {
        res.end('<h1>Hello Welcome To Contact Us Page </h1>');
    } else if (req.url == '/aboutus') {
        res.end('<h1>Hello Welcome To About Us Page </h1>');
    } else if (req.url == '/userapi') {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(decode.first_name);
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1> 404 error page  Doesn't exit </h1>");
    }
});
server.listen(2525, "127.0.0.1", () => {
    console.log("Localhost Poart In 127.0.0.1");
});