import express from "express";
import session from "express-session";
import flash from 'connect-flash';
import { __dirname, pathViews, pathPublic } from './utils.js';
import routing from "./routes/index.js";
import 'dotenv/config'; 
import mongoose from "mongoose";

const app = express();
const { APP_LOCALHOST, APP_PORT, APP_ADDRESS_MONGODB, APP_COLLECTION_POSTS_MONGODB } = process.env ;

mongoose.connect(
  `mongodb://${APP_ADDRESS_MONGODB}/${APP_COLLECTION_POSTS_MONGODB}`, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  }
)

app.use(
  session({
    secret: "register123",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(express.static(pathPublic));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", pathViews);
app.use(routing);

app.listen(APP_PORT, () => {
  console.log(`Server app listening at http://${APP_LOCALHOST}:${APP_PORT}`);
});
