import express from "express";
const router = express.Router();

// import HomeController from "../controllers/home";
import RegisterController from "../controllers/register.js";
import LoginController from "../controllers/login.js";
import StatController from "../controllers/stat.controllers.js";

import authMiddleware from '../middlewares/auth.js';

router.all('/auth/login', LoginController);
router.get("/auth/register",  (req, res) => {
  res.render("authentification/register");
});

router.post('/register', RegisterController);
router.get('/',authMiddleware,  StatController);

export default router;