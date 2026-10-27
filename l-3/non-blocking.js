const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (error, data) => {
    // CALLBACK: file reading complete hone par chalega.
    if (error) return console.log(error.message);

    console.log(data);
});

console.log("End");