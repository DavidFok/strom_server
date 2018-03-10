
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {
          street_line_1: '4915 W 16th Ave',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T2H2',
          country: 'Canada'
        },
        {
          street_line_1: '3228 Ross Drive',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6S0C6',
          country: 'Canada'
        },
        {
          street_line_1: '6085 Thunderbird Boulevard',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T1Z35',
          country: 'Canada'
        },
        {
          street_line_1: '2140 Lower Mall',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T1Z2',
          country: 'Canada'
        },
        {
          street_line_1: '6133 University Blvd',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T1Z1',
          country: 'Canada'
        },
        {
          street_line_1: '6115 Student Union Boulevard',
          street_line_2: '',
          city: 'Vancouver',
          province: 'BC',
          postal_code: 'V6T1Z1',
          country: 'Canada'
        }
      ]);
    });
};
