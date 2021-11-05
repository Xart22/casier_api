const router = require("express").Router();
const { addcategory } = require("../controllers/categoryController");
const categoryCtrl = require("../controllers/categoryController");

router
  .route("/")
  .get(categoryCtrl.getAllCategory)
  .post(categoryCtrl.addCategory);

module.exports = router;
