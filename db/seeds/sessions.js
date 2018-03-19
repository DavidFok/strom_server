const m = require('moment');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sessions').del()
    .then(function () {
      // Inserts seed entries
      return knex('sessions').insert([
        {
          spot_id: 9,
          user_id: 1,
          charge_start: m().subtract(23, 'minutes').utc().format(),
          charge_end: m().add(7, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 2
        {
          spot_id: 12,
          user_id: 2,
          charge_start: m().subtract(23, 'minutes').utc().format(),
          charge_end: m().add(7, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 3
        {
          spot_id: 26,
          user_id: 3,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 4
        {
          spot_id: 29,
          user_id: 4,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 5
        {
          spot_id: 30,
          user_id: 5,
          charge_start: m().subtract(21, 'minutes').utc().format(),
          charge_end: m().add(9, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 6
        {
          spot_id: 31,
          user_id: 6,
          charge_start: m().subtract(21, 'minutes').utc().format(),
          charge_end: m().add(9, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 7
        {
          spot_id: 32,
          user_id: 7,
          charge_start: m().subtract(25, 'minutes').utc().format(),
          charge_end: m().add(5, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 8
        {
          spot_id: 33,
          user_id: 8,
          charge_start: m().subtract(25, 'minutes').utc().format(),
          charge_end: m().add(5, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 9
        {
          spot_id: 34,
          user_id: 9,
          charge_start: m().subtract(25, 'minutes').utc().format(),
          charge_end: m().add(5, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 10
        {
          spot_id: 35,
          user_id: 10,
          charge_start: m().subtract(23, 'minutes').utc().format(),
          charge_end: m().add(7, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 11
        {
          spot_id: 36,
          user_id: 11,
          charge_start: m().subtract(23, 'minutes').utc().format(),
          charge_end: m().add(7, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 12
        {
          spot_id: 39,
          user_id: 12,
          charge_start: m().subtract(23, 'minutes').utc().format(),
          charge_end: m().add(7, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 13
        {
          spot_id: 45,
          user_id: 13,
          charge_start: m().subtract(20, 'minutes').utc().format(),
          charge_end: m().add(10, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 14
        {
          spot_id: 46,
          user_id: 14,
          charge_start: m().subtract(18, 'minutes').utc().format(),
          charge_end: m().add(12, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 15
        {
          spot_id: 48,
          user_id: 15,
          charge_start: m().subtract(15, 'minutes').utc().format(),
          charge_end: m().add(15, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 16
        {
          spot_id: 49,
          user_id: 16,
          charge_start: m().subtract(15, 'minutes').utc().format(),
          charge_end: m().add(15, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 17
        {
          spot_id: 52,
          user_id: 17,
          charge_start: m().subtract(20, 'minutes').utc().format(),
          charge_end: m().add(10, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 18
        {
          spot_id: 53,
          user_id: 18,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 19
        {
          spot_id: 54,
          user_id: 19,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 20
        {
          spot_id: 60,
          user_id: 20,
          charge_start: m().subtract(23, 'minutes').utc().format(),
          charge_end: m().add(7, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 21
        {
          spot_id: 68,
          user_id: 21,
          charge_start: m().subtract(25, 'minutes').utc().format(),
          charge_end: m().add(5, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 22
        {
          spot_id: 88,
          user_id: 22,
          charge_start: m().subtract(25, 'minutes').utc().format(),
          charge_end: m().add(5, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 23
        {
          spot_id: 90,
          user_id: 23,
          charge_start: m().subtract(13, 'minutes').utc().format(),
          charge_end: m().add(17, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 24
        {
          spot_id: 95,
          user_id: 24,
          charge_start: m().subtract(11, 'minutes').utc().format(),
          charge_end: m().add(19, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 25
        {
          spot_id: 99,
          user_id: 25,
          charge_start: m().subtract(18, 'minutes').utc().format(),
          charge_end: m().add(12, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 26
        {
          spot_id: 100,
          user_id: 9,
          charge_start: m().subtract(18, 'minutes').utc().format(),
          charge_end: m().add(12, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 27
        {
          spot_id: 101,
          user_id: 1,
          charge_start: m().subtract(26, 'minutes').utc().format(),
          charge_end: m().add(4, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 28
        {
          spot_id: 109,
          user_id: 2,
          charge_start: m().subtract(1, 'minutes').utc().format(),
          charge_end: m().add(29, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 29
        {
          spot_id: 119,
          user_id: 3,
          charge_start: m().subtract(3, 'minutes').utc().format(),
          charge_end: m().add(27, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 30
        {
          spot_id: 121,
          user_id: 4,
          charge_start: m().subtract(8, 'minutes').utc().format(),
          charge_end: m().add(22, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 31
        {
          spot_id: 122,
          user_id: 5,
          charge_start: m().subtract(19, 'minutes').utc().format(),
          charge_end: m().add(11, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 32
        {
          spot_id: 123,
          user_id: 6,
          charge_start: m().subtract(6, 'minutes').utc().format(),
          charge_end: m().add(24, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 33
        {
          spot_id: 131,
          user_id: 7,
          charge_start: m().subtract(6, 'minutes').utc().format(),
          charge_end: m().add(24, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 34
        {
          spot_id: 135,
          user_id: 8,
          charge_start: m().subtract(24, 'minutes').utc().format(),
          charge_end: m().add(6, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 35
        {
          spot_id: 137,
          user_id: 9,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 36
        {
          spot_id: 139,
          user_id: 10,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 37
        {
          spot_id: 142,
          user_id: 11,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 38
        {
          spot_id: 143,
          user_id: 8,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 39
        {
          spot_id: 146,
          user_id: 8,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 40
        {
          spot_id: 147,
          user_id: 8,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(82, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 41
        {
          spot_id: 150,
          user_id: 8,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 42
        {
          spot_id: 153,
          user_id: 8,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
        // # 43
        {
          spot_id: 153,
          user_id: 8,
          charge_start: m().subtract(22, 'minutes').utc().format(),
          charge_end: m().add(8, 'minutes').utc().format(),
          time_limit: 30,
          overtime: false
        },
      ]);
    });
};
