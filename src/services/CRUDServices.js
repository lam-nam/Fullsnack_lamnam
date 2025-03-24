import bcrypt from "bcryptjs";
import db from "../models";
import { where } from "sequelize";

const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
        phoneNumber: data.phoneNumber,
      });

      resolve("ok! create user succeed!!!"); // bat buoc de chay ra ngoai promise = return
    } catch (e) {
      reject(e);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findAll({ raw: true });
      resolve(user);
    } catch (e) {
      reject(e);
    }
  });
};

const getUserInfoByID = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (user) {
        resolve(user);
      } else {
        resolve([]);
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateUserByID = async (id, newData) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Xóa email và password khỏi newData để tránh cập nhật chúng
      delete newData.email;
      delete newData.password;

      let result = await db.User.update(newData, {
        where: { id: id },
      });

      if (result[0] > 0) {
        resolve("User updated successfully!");
      } else {
        resolve("User not found or no changes made.");
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUserByID = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: id },
      });
      if (user) {
        await db.User.destroy({
          where: {
            id: id,
          },
        });
        resolve("Delete user succeed!");
      } else {
        resolve("Cannot find user!");
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createNewUser: createNewUser,
  getAllUsers: getAllUsers,
  getUserInfoByID: getUserInfoByID,
  updateUserByID: updateUserByID,
  deleteUserByID: deleteUserByID,
};

// ham thi const
// bien thi let
