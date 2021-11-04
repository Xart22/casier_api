const db = require("../config/db");
const { Product } = require("../models");

const productCtrl = {
  getAllProduct: async (req, res) => {
    await Product.findAll()
      .then((result) => {
        res.status(200).json({
          status: "success",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  addProduct: async (req, res) => {
    try {
      const {
        product_code,
        nm_product,
        selling_price,
        hpp,
        disc,
        sold,
        category_id,
      } = req.body;
      await Product.create({
        product_code,
        nm_product,
        selling_price,
        hpp,
        disc,
        sold,
        category_id,
      });
      return res.status(200).json({
        status: "success",
      });
    } catch (err) {
      if (err.errors[0].message == "product_code must be unique") {
        res.status(400).json({
          status: "failed",
          message: "duplicate entry for product_code",
        });
      } else {
        res.status(400).json({
          message: "failed",
          message: err.errors[0].message,
        });
      }
    }
  },
  updateProduct: async (req, res) => {
    const data = req.body;
    const uuid = req.params.uuid;
    const product = await Product.findOne({
      where: { uuid },
    });
    if (product) {
      await Product.update(data, {
        where: {
          uuid,
        },
      })
        .then(() => {
          res.status(200).json({
            status: "success",
          });
        })
        .catch((err) => {
          if (err.errors[0].message == "product_code must be unique") {
            res.status(400).json({
              status: "failed",
              message: "duplicate entry for product_code",
            });
          } else {
            res.status(400).json({
              message: "failed",
              message: err.errors[0].message,
            });
          }
        });
    } else {
      res.status(400).json({
        status: "failed",
        message: "Product Not Found",
      });
    }
  },
  getProduct: async (req, res) => {
    const uuid = req.params.uuid;
    await Product.findOne({
      where: { uuid },
    })
      .then((result) => {
        if (!result) {
          res.status(400).json({
            status: "succes",
            message: "Product Not Found",
          });
        } else {
          res.json(result);
        }
      })
      .catch((err) => {
        res.status(500).json({
          status: "failed",
          error: err.errors[0].message,
        });
      });
  },
  deleteProduct: async (req, res) => {
    const uuid = req.params.uuid;
    const product = await Product.findOne({
      uuid,
    });
    if (product) {
      product
        .destroy()
        .then(() => {
          res.json({
            status: "succes",
            message: "Product Deleted",
          });
        })
        .catch((err) => {
          res.status(400).json({
            status: "failed",
            error: err.errors[0].message,
          });
        });
    } else {
      res.status(400).json({
        status: "failed",
        message: "Product Not Found",
      });
    }
  },
};
module.exports = productCtrl;
