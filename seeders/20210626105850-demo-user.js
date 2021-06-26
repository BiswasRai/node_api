"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Biswas Rai",
          email: "biswasrai@node.com",
          gender: "Male",
          role: ["Admin", "User"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Asha Rai",
          email: "asharai@node.com",
          gender: "Female",
          role: ["User"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
