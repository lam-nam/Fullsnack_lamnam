const getHomePage = (req, res) => {
  res.render("homePage");
};

const getLamNamPage = (req, res) => {
  res.send("hello world from LamNamPage");
};

module.exports = {
  getHomePage: getHomePage,
  getLamNamPage: getLamNamPage,
};
