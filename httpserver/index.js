const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Hello Welcome Home Pages');
    } else if (req.url == '/contactUs') {
        res.end('Hello Welcome To About Us Page');
    } else {
        res.end("404 error page  Doesn't exit");
    }
});
server.listen(2525, "127.0.0.1", () => {
    console.log("Localhost Poart In 127.0.0.1");
});