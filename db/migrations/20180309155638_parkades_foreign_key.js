
exports.up = function(knex, Promise) {
  return knex.schema.table('parkades', function(table){
    table.foreign('address_id').references('addresses.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('parkades', function(table){
    table.dropForeign('address_id');
  });
};
