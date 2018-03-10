
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('student_id');
    table.string('password_digest');
    table.string('stripe_token');
    table.string('email');
    table.boolean('handicap');
  });
};  

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};