const EventEmitter = require("events");
const event = new EventEmitter;
// event.on("MyName", () => {
//     console.log('My Name Is Abhishek');
// });
// event.on("MyName", () => {
//     console.log('My Name Is Goyal');
// });
// event.on("MyName", () => {
//     console.log('My Name Is Chotu');
// });
event.on("MyName", (ss, msg) => {
    console.log(`My Status Code Is ${ss} and value is ${msg} `);
});
event.emit("MyName", 200, 'ok');