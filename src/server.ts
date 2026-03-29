import express from "express";
import type { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");


app.listen(port, () => {
    console.log("Server started on port 8080");
});

app.get("/", (req: Request, res: Response) => {
    res.render("pages/index");

});

app.get("/about", (req: Request, res: Response) => {
    res.render("pages/about");
});

app.route("/class")
    .get((req: Request, res: Response) => {
    res.render("pages/class");
    })
    .post((req: Request, res: Response) => {
        res.render("pages/class");
    });

app.use((req: Request, res: Response) => {
    res.status(404).render("pages/404");
});