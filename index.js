import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import 'dotenv/config'; 

import mainRouter from './routes/index.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { APP_LOCALHOST:hostname, APP_PORT:port } = process.env ;



app.use(express.static(path.join(__dirname, "public")));


app.use('/', mainRouter);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


app.listen(port, () => {
  console.log(`Server app listening at http://${hostname}:${port}`);
});
