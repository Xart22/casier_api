const { Category } = require("../models");

const categoryCtrl = {
  getAllCategory: async (req, res) => {
    Category.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json({
          status: "failed",
          error: err,
        });
      });
  },
  addCategory: async (req, res) => {
    const { category } = req.body;
    await Category.create({
      category,
    })
      .then((result) => {
        res.status(200).json({
          status: "success",
        });
      })
      .catch((err) => {
        if (err.errors[0].message == "category must be unique") {
          res.status(400).json({
            status: "failed",
            message: "Category Already Exists",
          });
        } else {
          res.status(400).json({
            message: "failed",
            message: err.errors[0].message,
          });
        }
      });
  },
};

module.exports = categoryCtrl;
