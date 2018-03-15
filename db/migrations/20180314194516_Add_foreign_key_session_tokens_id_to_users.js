
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.integer('session_token_id');
    table.foreign('session_token_id').references('sessions.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.dropForeign('session_token_id');
    table.dropColumn('session_token_id');
  });
};
