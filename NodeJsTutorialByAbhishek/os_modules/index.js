const os = require('os');
console.log(os.arch());
console.log(os.freemem() / 1024 / 1024 / 1024);
console.log(os.totalmem() / 1024 / 1024 / 1024);
console.log(os.type());
console.log(os.cpus());
console.log(os.getPriority());
console.log(os.platform());