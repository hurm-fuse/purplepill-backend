const fs = require("fs");
// read the file
let read = fs.readFileSync("readme.md", "utf-8")
console.log("the content of the file is "+read);
// write the fie
let write = fs.writeFileSync("ibrahim.txt", "hello how are you")
let write2 = fs.readFileSync("ibrahim.txt", "utf-8")
console.log(write2);
