import { resolveInclude } from "ejs";
import express from "express";
import {
  getHomePage,
  getLamNamPage,
  getCRUDPage,
  postCRUDPage,
  getDisplayPage,
  getEditPage,
  putCRUDPage,
  postDeletePage,
} from "../controllers/homeControllers";
const router = express.Router();

const initWebRouters = (app) => {
  router.get("/", getHomePage);
  router.get("/lamnam", getLamNamPage);
  router.get("/crud", getCRUDPage);
  router.get("/display", getDisplayPage);
  router.get("/edit-crud/:id", getEditPage);

  router.post("/post-crud", postCRUDPage);
  router.post("/put-crud", putCRUDPage); // update nen dung method put

  // nhung router.post bat buoc phai co action , method
  router.post("/delete-crud/:id", postDeletePage);
  // this is a line will run in server.js
  return app.use("/", router);
};

module.exports = initWebRouters;
