import express from "express";
import RegisterController from "../controllers/register.js";
import LoginController from "../controllers/login.js";
import StatController from "../controllers/stat.js";
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

router.all('/login', LoginController);
router.all('/register', RegisterController);
router.get('/',authMiddleware,  StatController);

export default router;