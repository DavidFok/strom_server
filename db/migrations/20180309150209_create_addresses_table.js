
exports.up = function(knex, Promise) {
  return knex.schema.createTable('addresses', function(table){
    table.increments('id').primary();
    table.string('street_line_1');
    table.string('street_line_2');
    table.string('city');
    table.string('province');
    table.string('postal_code');
    table.string('country');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('addresses');
};
