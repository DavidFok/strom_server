
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('parking_spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('parking_spots').insert([
        {
          spot_label: 0000001,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 1,
          in_use: false
        },
        {
          spot_label: 0000002,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 1,
          in_use: false
        },
        {
          spot_label: 0000003,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 1,
          in_use: false
        },
        {
          spot_label: 0000004,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 1,
          in_use: false
        },
        {
          spot_label: 0000005,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 0000006,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 0000007,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 0000008,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 0000009,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: true
        },
        {
          spot_label: 0000010,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 0000011,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: false
        },
        {
          spot_label: 0000012,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'wall',
          parkade_id: 2,
          in_use: true
        },
        {
          spot_label: 0000013,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 0000014,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 0000015,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 0000016,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 0000017,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 0000018,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 0000019,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 0000020,
          handicap: false,
          electric: true,
          cents_per_kwh: 0,
          plug_type: 'J1772',
          parkade_id: 3,
          in_use: false
        },
        {
          spot_label: 0000021,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 0000022,
          handicap: true,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 0000023,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 0000024,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 0000025,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 4,
          in_use: false
        },
        {
          spot_label: 0000026,
          handicap: true,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: true
        },
        {
          spot_label: 0000027,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: false
        },
        {
          spot_label: 0000028,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: false
        },
        {
          spot_label: 0000029,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: true
        },
        {
          spot_label: 0000030,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 5,
          in_use: true
        },
        {
          spot_label: 0000031,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 6,
          in_use: true
        },
        {
          spot_label: 0000032,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 6,
          in_use: true
        },
        {
          spot_label: 0000033,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 6,
          in_use: true
        },
        {
          spot_label: 0000034,
          handicap: false,
          electric: true,
          cents_per_kwh: 100,
          plug_type: 'J1772',
          parkade_id: 6,
          in_use: true
        },
        {
          spot_label: 0000035,
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
