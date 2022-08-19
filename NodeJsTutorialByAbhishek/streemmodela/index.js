const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on("request", (req, res) => {
    // fs.readFile('input.txt', 'utf-8', (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data);
    // });
    // 2nd Way
    // const read_stream = fs.createReadStream('input.txt');
    // read_stream.on("data", (chunkdata) => {
    //     res.write(`<h1>${chunkdata}</h1>`);
    // });
    // read_stream.on("end", (chunkdata) => {
    //     res.end(chunkdata);
    // });
    // read_stream.on("error", (err) => {
    //     res.end("<h1>File Not Found</h1>");
    // });
    // 3Way
    // const read_stream = fs.createReadStream('input.txt');
    // read_stream.pipe(res);
    // Date Functionlay
    const currentDay = new Date();
    let weekday = new Array(7);
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    res.write(`<h1>This Month Is ${month[currentDay.getMonth()]}</h1>`);
    res.write(`<h1>Today is ${weekday[currentDay.getDay()]}</h1>`);
    res.write(`<h1>Now Time ${currentDay.toLocaleTimeString()}</h1>`);
    res.end();
    // res.end(`<h1>${currentDay.toString()}</h1>`);
});
server.listen(8585, "127.0.0.1");