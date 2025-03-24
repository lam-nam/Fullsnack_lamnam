import db from "../models/index";
import {
  createNewUser,
  getAllUsers,
  getUserInfoByID,
  updateUserByID,
  deleteUserByID,
} from "../services/CRUDServices";

const getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll(); // cli // ORM
    res.render("homePage", { data: JSON.stringify(data) }); // x <- y
  } catch (e) {
    console.log(e);
  }
};

const getLamNamPage = (req, res) => {
  res.send("hello world from LamNamPage");
};

const getCRUDPage = async (req, res) => {
  res.render("crudPage");
};

const postCRUDPage = async (req, res) => {
  let mess = await createNewUser(req.body);
  console.log(mess);
  res.redirect("/display");
};

const getDisplayPage = async (req, res) => {
  let data = await getAllUsers();
  res.render("displayPage.ejs", { users: data });
};

const getEditPage = async (req, res) => {
  let userId = req.params.id;
  if (userId) {
    let userData = await getUserInfoByID(userId);
    res.render("editCRUD", { user: userData });
  } else {
    res.send("User not found!");
  }
};

const putCRUDPage = async (req, res) => {
  try {
    let { id, firstName, lastName, address, phoneNumber, gender, roleId } =
      req.body;

    let updatedData = {
      firstName,
      lastName,
      address,
      phoneNumber,
      gender,
      roleId,
    };

    let message = await updateUserByID(id, updatedData);
    console.log(message);
    res.redirect("/display"); // Quay lại trang danh sách sau khi cập nhật
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Internal Server Error");
  }
};

const postDeletePage = async (req, res) => {
  let userId = req.params.id;
  console.log(userId);
  if (!userId) {
    return res.status(400).send("User ID is missing!");
  }
  let mess = await deleteUserByID(userId);
  console.log(mess);
  res.redirect("/display");
};

module.exports = {
  getHomePage: getHomePage,
  getLamNamPage: getLamNamPage,
  getCRUDPage: getCRUDPage,
  postCRUDPage: postCRUDPage,
  getDisplayPage: getDisplayPage,
  getEditPage: getEditPage,
  putCRUDPage: putCRUDPage,
  postDeletePage: postDeletePage,
};
