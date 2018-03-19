
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
          session_token_id: 1,
          handicap: false,
          address_id: 107
        },
        // id 2
        {
          first_name: 'David',
          last_name: 'Fok',
          student_id: 12345,
          password_digest: 12345,
          email: 'davie@fok.you',
          session_token_id: 2,
          handicap: false,
          address_id: 8
        },
        // id 3
        {
          first_name: 'Tony',
          last_name: 'Ha',
          student_id: 12345,
          password_digest: 12345,
          email: 'tony@ha.ha',
          session_token_id: 3,
          handicap: false,
          address_id: 12
        },
        // id 4
        {
          first_name: 'Chris',
          last_name: 'Rowntree',
          student_id: 12345,
          password_digest: 12345,
          email: 'chris@rown.tree',
          session_token_id: 4,
          handicap: false,
          address_id: 14
        },
        // id 5
        {
          first_name: 'Abe',
          last_name: 'Lincoln',
          student_id: 12345,
          password_digest: 12345,
          email: 'abe@whitehouse.gov',
          session_token_id: 5,
          handicap: false,
          address_id: 16
        },
        // id 6
        {
          first_name: 'Donald',
          last_name: 'Trump',
          student_id: 0,
          password_digest: 0,
          email: 'dumb@little.moron',
          session_token_id: 6,
          handicap: true,
          address_id: 17
        },
        // id 7
        {
          first_name: 'Jimmy',
          last_name: 'Hendrix',
          student_id: 12345,
          password_digest: 12345,
          email: 'gui@tar.master',
          session_token_id: 7,
          handicap: false,
          address_id: 21
        },
        // id 8
        {
          first_name: 'Bob',
          last_name: 'Burgers',
          student_id: 12345,
          password_digest: 12345,
          email: 'bob@burgers.com',
          session_token_id: 8,
          handicap: false,
          address_id: 25
        },
        // id 9
        {
          first_name: 'Brian',
          last_name: 'Johnson',
          student_id: 12345,
          password_digest: 12345,
          email: 'ac@dc.rox',
          session_token_id: 9,
          handicap: false,
          address_id: 34
        },
        // id 10
        {
          first_name: 'Bobo',
          last_name: 'Zhao',
          student_id: 12345,
          password_digest: 12345,
          email: 'bobo@zhao.cn',
          session_token_id: 10,
          handicap: false,
          address_id: 35
        },
         // id 11
         {
          first_name: 'Justin',
          last_name: 'Trudeau',
          student_id: 12345,
          password_digest: 12345,
          email: 'justin@canada.gov',
          session_token_id: 11,
          handicap: false,
          address_id: 41
        },
         // id 12
         {
          first_name: 'Russell',
          last_name: 'Peters',
          student_id: 12345,
          password_digest: 12345,
          email: 'i@m.funny.com',
          session_token_id: 12,
          handicap: false,
          address_id: 46
        },
         // id 13
         {
          first_name: 'Dave',
          last_name: 'Chappelle',
          student_id: 12345,
          password_digest: 12345,
          email: 'i@m.funnier.com',
          session_token_id: 13,
          handicap: false,
          address_id: 50
        },
         // id 14
         {
          first_name: 'Amy',
          last_name: 'Schumer',
          student_id: 12345,
          password_digest: 12345,
          email: 'lol@cat.meow',
          session_token_id: 14,
          handicap: false,
          address_id: 55
        },
         // id 15
         {
          first_name: 'Ty Ty',
          last_name: 'Lanister',
          student_id: 12345,
          password_digest: 12345,
          email: 'butt@cat.com',
          session_token_id: 15,
          handicap: false,
          address_id: 59
        },
         // id 16
         {
          first_name: 'Stephanie',
          last_name: 'Cruz',
          student_id: 12345,
          password_digest: 12345,
          email: 'steph@hotmail.com',
          session_token_id: 16,
          handicap: false,
          address_id: 61
        },
         // id 17
         {
          first_name: 'Vanessa',
          last_name: 'Horgan',
          student_id: 12345,
          password_digest: 12345,
          email: 'vaness@yahoo.com',
          session_token_id: 17,
          handicap: false,
          address_id: 71
        },
         // id 18
         {
          first_name: 'John',
          last_name: 'Oliver',
          student_id: 12345,
          password_digest: 12345,
          email: 'last@week.tonight',
          session_token_id: 18,
          handicap: false,
          address_id: 74
        },
         // id 19
         {
          first_name: 'Stephen',
          last_name: 'Colbert',
          student_id: 12345,
          password_digest: 12345,
          email: 'the@late.show',
          session_token_id: 19,
          handicap: false,
          address_id: 76
        },
         // id 20
         {
          first_name: 'Trevor',
          last_name: 'Noah',
          student_id: 12345,
          password_digest: 12345,
          email: 'comedy@central.com',
          session_token_id: 20,
          handicap: false,
          address_id: 81
        },
         // id 21
         {
          first_name: 'Matsumoto',
          last_name: 'Jun',
          student_id: 12345,
          password_digest: 12345,
          email: 'arashi@ishot.com',
          session_token_id: 21,
          handicap: false,
          address_id: 84
        },
         // id 22
         {
          first_name: 'Jackie',
          last_name: 'Chan',
          student_id: 12345,
          password_digest: 12345,
          email: 'jackie@knows.kungfu',
          session_token_id: 22,
          handicap: false,
          address_id: 94
        },
         // id 23
         {
          first_name: 'Jennifer',
          last_name: 'Lawrence',
          student_id: 12345,
          password_digest: 12345,
          email: 'katniss@everdeen.panem',
          session_token_id: 23,
          handicap: false,
          address_id: 97
        },
         // id 24
         {
          first_name: 'Don',
          last_name: 'Burks',
          student_id: 12345,
          password_digest: 12345,
          email: 'Don@lighthouse.ca',
          session_token_id: 24,
          handicap: false,
          address_id: 103
        },
         // id 25
         {
          first_name: 'Joel',
          last_name: 'Shinness',
          student_id: 12345,
          password_digest: 12345,
          email: 'musicgod@lighthouse.ca',
          session_token_id: 25,
          handicap: false,
          address_id: 104
        }
      ]);
    });
};
