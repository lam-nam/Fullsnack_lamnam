import { resolveInclude } from "ejs";
import express from "express";
import { getHomePage, getLamNamPage } from "../controllers/homeControllers";
const router = express.Router();

const initWebRouters = (app) => {
  router.get("/", getHomePage);
  router.get("/lamnam", getLamNamPage);
  // this is a line will run in server.js
  return app.use("/", router);
};

module.exports = initWebRouters;
