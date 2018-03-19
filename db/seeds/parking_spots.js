
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
        },
        // #36
        {
          spot_label:36,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:7,
          in_use:true
        },
        // #37
        {
          spot_label:37,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:8,
          in_use:false
        },
        // #38
        {
          spot_label:38,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:8,
          in_use:false
        },
        // #39
        {
          spot_label:39,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:9,
          in_use:true
        },
        // #40
        {
          spot_label:40,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:9,
          in_use:false
        },
        // #41
        {
          spot_label:41,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:10,
          in_use:false
        },
        // #42
        {
          spot_label:42,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:10,
          in_use:false
        },
        // #43
        {
          spot_label:43,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:11,
          in_use:false
        },
        // #44
        {
          spot_label:44,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:12,
          in_use:false
        },
        // #45
        {
          spot_label:45,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:13,
          in_use:true
        },
        // #46
        {
          spot_label:46,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:14,
          in_use:true
        },
        // #47
        {
          spot_label:47,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:15,
          in_use:false
        },
        // #48
        {
          spot_label:48,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:16,
          in_use:true
        },
        // #49
        {
          spot_label:49,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:16,
          in_use:true
        },
        // #50
        {
          spot_label:50,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:16,
          in_use:false
        },
        // #51
        {
          spot_label:51,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:16,
          in_use:false
        },
        // #52
        {
          spot_label:52,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:true
        },
        // #53
        {
          spot_label:53,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:true
        },
        // #54
        {
          spot_label:54,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:true
        },
        // #55
        {
          spot_label:55,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:false
        },
        // #56
        {
          spot_label:56,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:false
        },
        // #57
        {
          spot_label:57,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:false
        },
        // #58
        {
          spot_label:58,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:false
        },
        // #59
        {
          spot_label:59,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:false
        },
        // #60
        {
          spot_label:60,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:true
        },
        // #61
        {
          spot_label:61,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:17,
          in_use:false
        },
        // #62
        {
          spot_label:62,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:18,
          in_use:false
        },
        // #63
        {
          spot_label:63,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:18,
          in_use:false
        },
        // #64
        {
          spot_label:64,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:18,
          in_use:false
        },
        // #65
        {
          spot_label:65,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:18,
          in_use:false
        },
        // #66
        {
          spot_label:66,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:18,
          in_use:false
        },
        // #67
        {
          spot_label:67,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:18,
          in_use:false
        },
        // #68
        {
          spot_label:68,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:19,
          in_use:true
        },
        // #69
        {
          spot_label:69,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:20,
          in_use:false
        },
        // #70
        {
          spot_label:70,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:21,
          in_use:false
        },
        // #71
        {
          spot_label:71,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:22,
          in_use:false
        },
        // #72
        {
          spot_label:72,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:23,
          in_use:false
        },
        // #73
        {
          spot_label:73,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:23,
          in_use:false
        },
        // #74
        {
          spot_label:74,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:23,
          in_use:false
        },
        // #75
        {
          spot_label:75,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:23,
          in_use:false
        },
        // #76
        {
          spot_label:76,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:23,
          in_use:false
        },
        // #77
        {
          spot_label:77,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:23,
          in_use:false
        },
        // #78
        {
          spot_label:78,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:24,
          in_use:false
        },
        // #79
        {
          spot_label:79,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:24,
          in_use:false
        },
        // #80
        {
          spot_label:80,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:24,
          in_use:false
        },
        // #81
        {
          spot_label:81,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:24,
          in_use:false
        },
        // #82
        {
          spot_label:82,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:25,
          in_use:false
        },
        // #83
        {
          spot_label:83,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:26,
          in_use:false
        },
        // #84
        {
          spot_label:84,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:27,
          in_use:false
        },
        // #85
        {
          spot_label:85,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:27,
          in_use:false
        },
        // #86
        {
          spot_label:86,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:27,
          in_use:false
        },
        // #87
        {
          spot_label:87,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:28,
          in_use:false
        },
        // #88
        {
          spot_label:88,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:29,
          in_use:true
        },
        // #89
        {
          spot_label:89,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:30,
          in_use:false
        },
        // #90
        {
          spot_label:90,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:31,
          in_use:true
        },
        // #91
        {
          spot_label:91,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:31,
          in_use:false
        },
        // #92
        {
          spot_label:92,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:32,
          in_use:false
        },
        // #93
        {
          spot_label:93,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:32,
          in_use:false
        },
        // #94
        {
          spot_label:94,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:33,
          in_use:false
        },
        // #95
        {
          spot_label:95,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:34,
          in_use:true
        },
        // #96
        {
          spot_label:96,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:34,
          in_use:false
        },
        // #97
        {
          spot_label:97,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:35,
          in_use:false
        },
        // #98
        {
          spot_label:98,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:35,
          in_use:false
        },
        // #99
        {
          spot_label:99,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:36,
          in_use:true
        },
        // #100
        {
          spot_label:100,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:36,
          in_use:true
        },
        // #101
        {
          spot_label:101,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:37,
          in_use:true
        },
        // #102
        {
          spot_label:102,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:38,
          in_use:false
        },
        // #103
        {
          spot_label:103,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:38,
          in_use:false
        },
        // #104
        {
          spot_label:104,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:39,
          in_use:false
        },
        // #105
        {
          spot_label:105,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:39,
          in_use:false
        },
        // #106
        {
          spot_label:106,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:40,
          in_use:false
        },
        // #107
        {
          spot_label:107,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:41,
          in_use:false
        },
        // #108
        {
          spot_label:108,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:42,
          in_use:false
        },
        // #109
        {
          spot_label:109,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:43,
          in_use:true
        },
        // #110
        {
          spot_label:110,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:44,
          in_use:false
        },
        // #111
        {
          spot_label:111,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:45,
          in_use:false
        },
        // #112
        {
          spot_label:112,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:45,
          in_use:false
        },
        // #113
        {
          spot_label:113,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:46,
          in_use:false
        },
        // #114
        {
          spot_label:114,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:47,
          in_use:false
        },
        // #115
        {
          spot_label:115,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:48,
          in_use:false
        },
        // #116
        {
          spot_label:116,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:48,
          in_use:false
        },
        // #117
        {
          spot_label:1117,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:49,
          in_use:false
        },
        // #118
        {
          spot_label:118,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:50,
          in_use:false
        },
        // #119
        {
          spot_label:119,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:51,
          in_use:true
        },
        // #120
        {
          spot_label:120,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:52,
          in_use:false
        },
        // #121
        {
          spot_label:121,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:52,
          in_use:true
        },
        // #122
        {
          spot_label:122,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:53,
          in_use:true
        },
        // #123
        {
          spot_label:123,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:53,
          in_use:true
        },
        // #124
        {
          spot_label:124,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:53,
          in_use:false
        },
        // #125
        {
          spot_label:125,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:54,
          in_use:false
        },
        // #126
        {
          spot_label:126,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:54,
          in_use:false
        },
        // #127
        {
          spot_label:127,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:55,
          in_use:false
        },
        // #128
        {
          spot_label:128,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:56,
          in_use:false
        },
        // #129
        {
          spot_label:129,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:56,
          in_use:false
        },
        // #130
        {
          spot_label:130,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:57,
          in_use:false
        },
        // #131
        {
          spot_label:131,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:57,
          in_use:true
        },
        // #132
        {
          spot_label:132,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:58,
          in_use:false
        },
        // #133
        {
          spot_label:133,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:59,
          in_use:false
        },
        // #134
        {
          spot_label:134,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:60,
          in_use:false
        },
        // #135
        {
          spot_label:135,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:61,
          in_use:true
        },
        // #136
        {
          spot_label:136,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:62,
          in_use:false
        },
        // #137
        {
          spot_label:137,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:63,
          in_use:true
        },
        // #138
        {
          spot_label:138,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:64,
          in_use:false
        },
        // #139
        {
          spot_label:139,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:64,
          in_use:true
        },
        // #140
        {
          spot_label:140,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:65,
          in_use:false
        },
        // #141
        {
          spot_label:141,
          handicap:true,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:66,
          in_use:false
        },
        // #142
        {
          spot_label:142,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:66,
          in_use:true
        },
        // #143
        {
          spot_label:143,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:66,
          in_use:true
        },
        // #144
        {
          spot_label:144,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:66,
          in_use:false
        },
        // #145
        {
          spot_label:145,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:67,
          in_use:false
        },
        // #146
        {
          spot_label:146,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:68,
          in_use:true
        },
        // #147
        {
          spot_label:147,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:68,
          in_use:true
        },
        // #148
        {
          spot_label:148,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:68,
          in_use:false
        },
        // #149
        {
          spot_label:149,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:69,
          in_use:false
        },
        // #150
        {
          spot_label:150,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:70,
          in_use:true
        },
        // #151
        {
          spot_label:151,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:70,
          in_use:false
        },
        // #152
        {
          spot_label:152,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:71,
          in_use:false
        },
        // #153
        {
          spot_label:153,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:72,
          in_use:true
        },
        // #154
        {
          spot_label:154,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:72,
          in_use:true
        },
        // #155
        {
          spot_label:155,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:73,
          in_use:false
        },
        // #156
        {
          spot_label:156,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:73,
          in_use:false
        },
        // #157
        {
          spot_label:157,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:73,
          in_use:false
        },
        // #158
        {
          spot_label:158,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:74,
          in_use:false
        },
        // #159
        {
          spot_label:159,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:75,
          in_use:false
        },
        // #160
        {
          spot_label:160,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:76,
          in_use:false
        },
        // #161
        {
          spot_label:161,
          handicap:false,
          electric:true,
          cents_per_kwh:0,
          plug_type: 'J1772',
          parkade_id:77,
          in_use:false
        }
      ]);
    });
};
