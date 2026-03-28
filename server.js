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

app.get("/form", (req, res) => {
    res.send("<h1>Form Page</h1>");
});

app.get("/class1", (req, res) => {
    res.send("<h1>Class 1 Page</h1>");
});

app.get("/class2", (req, res) => {
    res.send("<h1>Class 2 Page</h1>");
});
