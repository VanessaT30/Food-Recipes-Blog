import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render(__);
});

app.get("/savoury", (req, res) => {
    res.render(__dirname + "/views/savoury.ejs");
});

app.get("/sweet", (req, res) => {
    res.render(__dirname + "/views/sweet.ejs");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

