exports.up = function(knex, Promise) {
  // adding column which ties the parking spot to a parkade
  return knex.schema.table('parkades', function(table){
    table.integer('address_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('parkades', function(table){
    table.dropColumn('address_id');
  });
};