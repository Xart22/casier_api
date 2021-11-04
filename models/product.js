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
  }
  Product.init(
    {
      product_code: DataTypes.STRING,
      nm_product: DataTypes.STRING,
      selling_price: DataTypes.DECIMAL(10, 2),
      hpp: DataTypes.DECIMAL(10, 2),
      disc: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
