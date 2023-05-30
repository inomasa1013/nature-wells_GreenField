/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id").primary();
    table.boolean("isWaiting");
    table.string("item", 64);
    table.string("itemExp", 256);
    table.string("seller", 64);
    table.string("comment", 256);
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTable("products");
};
