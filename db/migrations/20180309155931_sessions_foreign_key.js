
exports.up = function(knex, Promise) {
  return knex.schema.table('sessions', function(table){
    table.foreign('spot_id').references('parking_spots.id');
    table.foreign('vehicle_id').references('vehicles.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('sessions', function(table){
    table.dropForeign('spot_id');
    table.dropForeign('vehicle_id');
  });
};
