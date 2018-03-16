
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sessions', function(table){
    table.increments('id').primary();
    table.integer('spot_id');
    table.integer('vehicle_id');
    table.integer('user_id');
    table.dateTime('charge_start');
    table.dateTime('charge_end');
    table.integer('time_limit');
    table.boolean('overtime');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sessions');
};
