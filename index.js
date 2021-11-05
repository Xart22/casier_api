const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { sequelize } = require("./models");
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000 || process.env.PORT;

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("DB Connected");
});
app.get("/", (req, res) => {
  res.send("oke");
});
//IMPORT ROUTER
const productsRouter = require("./routes/productRouter");
const categoryRoter = require("./routes/categoryRouter");
//ROUTER
app.use("/api/products/", productsRouter);
app.use("/api/categories/", categoryRoter);
