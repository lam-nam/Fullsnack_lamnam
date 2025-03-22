// const expresss = require("express");
// const path = require("path");

import express from "express";

const configViewEngine = (app) => {
  //config view engine
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
  //config static files
  app.use(express.static("./src/public"));
};

module.exports = configViewEngine;
