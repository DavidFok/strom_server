
exports.up = function(knex, Promise) {
  return knex.schema.createTable('token_sessions', function(table) {
    table.increments('id').primary();
    table.string('session_token');
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('token_sessions');
};
