import "dotenv/config";
import cors from "cors";
import express from "express";
import type { Request, Response } from "express";
import { Pool } from "pg";

const app = express();
const port = process.env.PORT || 8080;

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
    host: PGHOST,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

app.use(cors());
app.use(express.json());
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
    .get( async (req: Request, res: Response) => {
        const client = await pool.connect();
        try {
            const result = await client.query("SELECT first_name, last_name, email, class_type FROM students");
            console.log(result.rows);
            res.render("pages/class", { students: result.rows });
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }
    })
    .post((req: Request, res: Response) => {
        res.render("pages/class");
    });

app.use((req: Request, res: Response) => {
    res.status(404).render("pages/404");
});