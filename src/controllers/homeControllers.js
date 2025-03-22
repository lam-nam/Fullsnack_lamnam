import db from "../models/index";

const getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("--------------------------------------");
    console.log(data);
    console.log("--------------------------------------");

    res.render("homePage", { data: JSON.stringify(data) }); // x <- y
  } catch (e) {
    console.log(e);
  }
};

const getLamNamPage = (req, res) => {
  res.send("hello world from LamNamPage");
};

module.exports = {
  getHomePage: getHomePage,
  getLamNamPage: getLamNamPage,
};
