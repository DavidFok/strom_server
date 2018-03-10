
exports.up = function(knex, Promise) {
  // adding column which ties the parking spot to a parkade
  return knex.schema.table('parking_spots', function(table){
    table.integer('parkade_id');
  });


};

exports.down = function(knex, Promise) {
  return knex.schema.table('parking_spots', function(table){
    table.dropColumn('parkade_id');
  });
};
