const productsModels = require("./product.models");

module.exports = {
  async getAll(req, res) {
    const products = await productsModels.getAll();
    res.render("/table", { products });
  },
};
