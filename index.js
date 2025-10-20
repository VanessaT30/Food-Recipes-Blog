import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// app.use(express.static("public"))
// app.use(express.static("images"))
app.use(express.static(path.join(__dirname, 'public')));
//IF we have this structure:
// project/
//   ├── public/
//   │   ├── css/
//   │   │   └── index.css
//   │   ├── images/
//   │   │   └── ramen.svg
//   │   └── index.html
app.use('/images', express.static(path.join(__dirname, 'images')));
//IF we have this structure:
// project/
//   ├── images/
//   │   └── ramen.svg
//   └── public/
//       ├── css/
//       └── index.html
// app.use('/images', express.static(...))
// Then Express serves /images/ramen.svg → from the /images folder outside of /public.
//background: url('/images/ramen.svg');


app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')) // make sure were doing an absolute path

app.get("/", (req, res) => {
    console.log("Hi there!");
    res.sendFile(path.join(__dirname, "public", "index.html"));
    // res.render(path.join(__dirname, "views", "index.ejs"));
    // res.render(/views/index.ejs);
});

app.get("/savoury", (req, res) => {
    res.render(path.join(__dirname, "views", "savoury.ejs"));
});

app.get("/sweet", (req, res) => {
    res.render(path.join(__dirname, "views", "sweet.ejs"));
});

app.get("/add", (req, res) => {
    res.render(path.join(__dirname, "public", "add.html"));
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:3000");
});

