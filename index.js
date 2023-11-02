const moment = require("moment");
const math = require("mathjs");

console.log("Hello World");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

console.log(math.sqrt(-4));

var name = "Ben";
var time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

function f(x, y = 12) {
  return x + y;
}
console.log(f(3));

// Proxying a normal object
var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  },
};

var p = new Proxy(target, handler);
console.log(p.world);
