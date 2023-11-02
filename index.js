const moment = require("moment");
const math = require("mathjs");

console.log("Hello World");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

console.log(math.sqrt(-4));
