const router = require("express").Router();
const db = require("../config/db");
const { Product } = require("../models/");

router.get("/", (req, res) =>
  Product.findAll()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => console.log(err))
);
router.get("/add", (req, res) => {
  const data = {
    product_code: "1287483164209",
    nm_product: "testing",
    selling_price: 100000,
    hpp: 50000,
    disc: 10,
    sold: 0,
    category_id: 1,
  };
  Product.create(data)
    .then((product) => res.redirect("/api/products"))
    .catch((err) => res.status(400).json({ message: err.errors[0].message }));
});

module.exports = router;
