
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parking_spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('parking_spots').insert([
        {
          spot_label: 1,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 1,
          in_use: false
        },
        {
          spot_label: 2,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 1,
          in_use: false
        },
        {
          spot_label: 3,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 1,
          in_use: false
        },
        {
          spot_label: 4,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 1,
          in_use: false
        },
        {
          spot_label: 5,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 6,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 7,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 8,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 9,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: true
        },
        {
          spot_label: 10,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 11,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 12,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: true
        },
        {
          spot_label: 13,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 14,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 15,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 16,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 17,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 18,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 19,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 20,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 21,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 22,
          handicap: true,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 23,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 24,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 25,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 26,
          handicap: true,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: true
        },
        {
          spot_label: 27,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: false
        },
        {
          spot_label: 28,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: false
        },
        {
          spot_label: 29,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: true
        },
        {
          spot_label: 30,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: true
        },
        {
          spot_label: 31,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 6,
          in_use: true
        },
        {
          spot_label: 32,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 6,
          in_use: true
        },
        {
          spot_label: 33,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 6,
          in_use: true
        },
        {
          spot_label: 34,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 6,
          in_use: true
        },
        {
          spot_label: 35,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 6,
          in_use: true
        }
      ]);
    });
};
