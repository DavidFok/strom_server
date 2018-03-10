
exports.up = function(knex, Promise) {
  return knex.schema.createTable('parkades', function(table){
    table.increments('id').primary();
    table.decimal('latitude', 14, 8);
    table.decimal('longitude', 14, 8);
    table.integer('spot_count_regular');
    table.integer('spot_count_handicap');
    table.integer('occupied_regular');
    table.integer('occupied_handicap');
    table.boolean('pay_to_park');
    table.dateTime('open_time');
    table.dateTime('close_time');
    table.string('notes', 1024);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('parkades');
};
