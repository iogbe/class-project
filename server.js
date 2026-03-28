import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");


app.listen(port, () => {
    console.log("Server started on port 8080");
});

app.get("/", (req, res) => {
    res.render("pages/index");

});

app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.get("/form", (req, res) => {
    res.render("pages/form");
});

app.get("/class", (req, res) => {
    res.render("pages/class");
});
