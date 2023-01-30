"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Asyari",
        profession: "Developer",
        role: "admin",
        email: "asyari@gmail.com",
        password: await bcrypt.hash("123456", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Bre",
        profession: "Developer",
        role: "student",
        email: "bre@gmail.com",
        password: await bcrypt.hash("123456", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
