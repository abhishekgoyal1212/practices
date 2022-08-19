const { Console } = require('console');
const fs = require('fs');
const bioData = {
    name: "Abhishek",
    age: 26,
    devloper: "Abhishek laravel Devloper",
}

// const jsondata = JSON.stringify(bioData);
// const new_file = fs.writeFile('json1.json', jsondata, (err) => {
//     console.log("Create ok Successfully");
// });
const read = fs.readFile("json1.json", "utf-8", (err, data) => {
    const obj = JSON.parse(data);
    console.log(obj);

})




// const jsondata = JSON.stringify(bioData);
// const objectdata = JSON.parse(jsondata);
// console.log(jsondata);
// console.log(objectdata)