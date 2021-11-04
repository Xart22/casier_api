const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Test Connection
const db = require("./config/db");
db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error: " + err));

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("oke");
});
//IMPORT ROUTER
const productsRouter = require("./routes/productsRouter");
//ROUTER
app.use("/api/products/", productsRouter);
