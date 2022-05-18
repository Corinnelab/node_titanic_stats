import express from "express";
import path from "path";

import routing from "./routes/index.js";
import "dotenv/config";
import { config } from "./config/settings.js";

import session from 'express-session';
const app = express();
const { LOCALHOST, PORT } = config;

app.use(session({
    name : 'session-id',
    secret : 'RANDOM_TOKEN_SECRET',
    resave :true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl:"mongodb://localhost:27017/kittens" }),
    cookie : { maxAge : 180 * 60 * 1000 } // on détermine la durée de vie de la session
}));

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.json()); // pour parser content-type:application/json
app.use(express.urlencoded({ extended: true })); 

app.use(routing);

app.listen(PORT, () => {
    console.log(`app listening at http://${LOCALHOST}:${PORT}`);
});