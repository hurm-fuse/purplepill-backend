const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("data.txt", "utf8");
// BLOCKING: file read hone tak aage ka code rukega.

console.log(data);
console.log("End");