
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vehicles', function(table){
    table.increments('id').primary();
    table.integer('user_id');
    table.string('license_plate');
    table.string('model');
    table.string('make');
    table.string('color');
    table.string('status');    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vehicles');
};
