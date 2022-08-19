const chalk = require("chalk");
const validator = require("validator");
// console.log(chalk.green.italic.inverse("success"));
const res = validator.isEmail('Abhi@gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))
    // if (res) {
    //     console.log(chalk.green.inverse('Ture'));
    // } else {
    //     console.log(chalk.red.inverse('False'));
    // }