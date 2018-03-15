
exports.up = function(knex, Promise) {
  return knex.schema.createTable('session_tokens', function(table) {
    table.increments('id').primary();
    table.string('session_token');
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('session_tokens');
};
