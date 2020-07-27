let anewFunc = require("./ReturnFunctions");

console.log(anewFunc);

const {aChild, aSecondChild} = anewFunc("cats","dogs");

console.log(aChild())
console.log(aSecondChild())