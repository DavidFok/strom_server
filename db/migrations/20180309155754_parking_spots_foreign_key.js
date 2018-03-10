
exports.up = function(knex, Promise) {
  return knex.schema.table('parking_spots', function(table){
    table.foreign('parkade_id').references('parkades.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('parking_spots', function(table){
    table.dropForeign('parkade_id');
  });
};
