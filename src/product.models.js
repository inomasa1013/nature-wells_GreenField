const knex = require("../knex");

/**
 * テーブル名称productsを代入
 */

const PRODUCT_TABLE = "products";

module.exports = {
  PRODUCT_TABLE,
  /**
   *

   * @returns {promise}productテーブルの中身を全て取得
   */
  async getAll() {
    return await knex.select("*").from(PRODUCT_TABLE);

  },
};
