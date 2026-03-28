import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, rest) => {
    rest.send("Hello World");

});

app.listen(port, () => {
    console.log("Server started on port 8080");
});