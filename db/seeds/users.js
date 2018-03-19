
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'bla',
          last_name: 'bla',
          student_id: 12345,
          password_digest: 12345,
          email: 'bla@bla.bla',
          handicap: false,
          address_id: 107
        }
      ]);
    });
};
