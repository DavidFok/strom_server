
exports.up = function(knex, Promise) {
  return knex.schema.table('sessions', function(table){
    table.foreign('spot_id').references('parking_spots.id');
    table.foreign('vehicle_id').references('vehicles.id');
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('sessions', function(table){
    table.dropForeign('spot_id');
    table.dropForeign('vehicle_id');
    table.dropForeign('user_id');
  });
};
