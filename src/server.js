import express from "express";
import configViewEngige from "./configs/viewEngines";
import initWebRoutes from "./routes/webs";
import bodyPaser from "body-parser";
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

configViewEngige(app);
initWebRoutes(app);

app.listen(port, () => {
  console.log("App listening on Port: ", +port);
});
