"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nm_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      selling_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      hpp: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      disc: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sold: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          mode: "category",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};
