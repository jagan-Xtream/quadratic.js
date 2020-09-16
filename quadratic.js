const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
var spt = userInput[0].split(" ");
var a = parseInt(spt[0]);
var b = parseInt(spt[1]);
var c = parseInt(spt[2]);
var discriminant = (b * b) - (4*a*c);
var cof1 = ((-b) + (Math.sqrt(discriminant)))/(2*a);
var cof2 = ((-b) - (Math.sqrt(discriminant)))/(2*a);

console.log(cof1.toFixed(2));
console.log(cof2.toFixed(2));    


});
