import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import authRoutes from "./auth.routes.js";

import authMiddleware from "../middlewares/auth.js";

//const { APP_LOCALHOST:hostname, APP_PORT:port } = process.env ;
const __dirname = dirname(fileURLToPath(import.meta.url));
const router = express.Router();

router.use((req, res, next) => {
    res.locals.alias = req.session.alias;
    next();
});

router.use("/auth", authRoutes);


router.get("/", (req, res) => {
    res.render("layouts", { template: "home" });
});

export default router;