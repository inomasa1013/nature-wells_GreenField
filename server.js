const express = require("express");
const app = express();
const PORT = 3000;

const productsController = require("./src/product.controller");

app.get("/table", async (req, res) => {
  res.json(await productsController.getAll());
});

app.listen(PORT, async () => {
  console.log(await productsController.getAll());
  console.log(`Server listening on port ${PORT}`);
});
