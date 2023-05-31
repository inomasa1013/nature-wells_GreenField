/**
 * product.models.jsでexportsしたmoduleを取得
 */
const productsModels = require("./product.models");

module.exports = {
  /**
   * @type {method}productテーブル内の全データを取得するメソッド
   * @returns {promise}オブジェクトを格納したpromiseを返す
   */
  async getAll() {
    const products = await productsModels.getAll();
    return await products;
  },
};
