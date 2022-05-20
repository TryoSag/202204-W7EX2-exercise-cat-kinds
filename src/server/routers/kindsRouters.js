const express = require("express");
const { getKinds } = require("../controllers/kindsControllers");

const kindsRouter = express.Router();

kindsRouter.get("/list", getKinds);

module.exports = kindsRouter;
