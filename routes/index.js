import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home.pug");
});

router.get("/login", (req, res) => {
  res.render("./authentification/login.pug");
});



export default router;