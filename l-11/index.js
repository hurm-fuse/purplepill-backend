const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Welcome to My Website",
        content: "Data is coming from JavaScript!",
        username: "Ibrahim"
    });
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});