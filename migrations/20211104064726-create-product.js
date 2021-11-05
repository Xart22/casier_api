"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      product_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nm_product: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      selling_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      hpp: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      disc: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sold: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "category",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("Products");
  },
};
