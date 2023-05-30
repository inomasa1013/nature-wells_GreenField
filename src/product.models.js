const knex = require("../knex");

const PRODUCT_TABLE = "products";

module.exports = {
  PRODUCT_TABLE,
  /**
   *
   * @returns {db}データベースの中身を全て取得
   */
  getAll() {
    return knex.select("*").from(PRODUCT_TABLE);
  },
};
