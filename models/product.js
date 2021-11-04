"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Product.init(
    {
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      product_code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "Product Code Required" },
          notEmpty: { msg: "Product Code Required" },
        },
      },
      nm_product: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Product Name Required" },
          notEmpty: { msg: "Product Name Required" },
        },
      },
      selling_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: { msg: "Price Required" },
          notEmpty: { msg: "Price Required" },
        },
      },
      hpp: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: { msg: "Cost Required" },
          notEmpty: { msg: "Cost Required" },
        },
      },
      disc: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sold: DataTypes.INTEGER,
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Category Required" },
          notEmpty: { msg: "Category Required" },
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
