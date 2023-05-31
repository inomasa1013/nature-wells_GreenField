import express from "express";
const app: express.Express = express();
const PORT = 3000;
const knex = require("knex");
const productsController = require("./src/product.controller");

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

app.get("/table", productsController.getAll);

app.listen(PORT, () => {
  console.log();
  console.log(`Server listening on port ${PORT}`);
});
