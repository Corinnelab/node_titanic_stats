import express from "express";
import userController from '../controllers/user.controllers.js';

const router = express.Router();

router.get("/login", userController.login);
router.get("/register", userController.signup);
//router.post("/new", userController.saveNewUser);


export default router;
