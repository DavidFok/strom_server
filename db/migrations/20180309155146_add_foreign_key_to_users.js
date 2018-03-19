
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.foreign('address_id').references('addresses.aid');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.dropForeign('address_id');
  });
};
