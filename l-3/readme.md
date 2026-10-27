in this lesson we are going to fucking learn about blocking and non blocking code

blocking code
- run statement by statement
ex:
const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("data.txt", "utf8");
// BLOCKING: file read hone tak aage ka code rukega.

console.log(data);
console.log("End");

non-blocking code
- not gurrented it run statment by statment
ex:
const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (error, data) => {
    // CALLBACK: file reading complete hone par chalega.
    if (error) return console.log(error.message);

    console.log(data);
});

console.log("End");