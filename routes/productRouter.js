const router = require("express").Router();
const productCtrl = require("../controllers/productController");

router.route("/").get(productCtrl.getAllProduct).post(productCtrl.addProduct);
router
  .route("/:uuid")
  .get(productCtrl.getProduct)
  .put(productCtrl.updateProduct)
  .delete(productCtrl.deleteProduct);

module.exports = router;
