
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parking_spots', function(table){
    table.increments('id').primary();
    table.integer('spot_label');
    table.boolean('handicap');
    table.boolean('electric');
    table.integer('cents_per_kwh');
    table.string('plug_type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('parking_spots');
};
