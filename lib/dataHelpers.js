const bcrypt = require('bcrypt');
const numSalts = 10;

module.exports = function makeDataHelpers(knex) {
  return {
    serveParkadeData: () => {
      return knex
        .select("*")
        .from('parkades')
        .join('addresses', 'parkades.address_id', '=', 'addresses.id')
    },

    retrieveUser: (email) => {
      return knex('users').where({email: email})
    },

    registerUser: (newUser) => {
      return ( knex
        .returning('id')
        .insert({
          street_line_1: newUser.street_line_1,
          street_line_2: newUser.street_line_2,
          city: newUser.city,
          province: newUser.province,
          postal_code: newUser.postal_code,
          country: newUser.country
        })
        .into('addresses')
        .then((id) => {
          return ( knex
            .insert({
              first_name: newUser.first_name,
              last_name: newUser.last_name,
              student_id: newUser.student_id,
              password_digest: bcrypt.hashSync(newUser.password, numSalts),
              email: newUser.email,
              handicap: newUser.handicap,
              address_id: id[0]
            })
            .into('users')
          );
        })
      );
    },
    checkForUser: (data) => {
      // check db that user doesn't exist
      if (data.length === 0) {
        return new Promise((resolve, reject) => {
          resolve([true, data]);
        })
      } else {
        return new Promise((resolve, reject) => {
          resolve([false, data]);
        })
      }
    },

    checkUserPassword: (password_submitted, password_digest) => {
      // check that the user password is correct
      if (bcrypt.compareSync(password_submitted, password_digest)) {
        // if the user password is correct, return true
        return true;
      }
      // if the user password is incorrect, return false
      return false;
    },

    getSpots(parkadeId) {
      return knex
        .select()
        .from('parking_spots')
        .where('parkade_id', '=', parkadeId)
    },

    checkForSpot(spotId) {
      return knex
        .select()
        .from('parking_spots')
        .where('spot_label', '=', spotId)
        .then((res) => {
          if (res.length === 0) {
            return ["reject", "Spot does not exist"];
          } else {
            if (res[0].in_use) {
              return ["reject", "Sorry, spot in use"];
            } else {
              return knex('parking_spots')
                .where('spot_label', '=', res[0].spot_label)
                .update('in_use', true)
                .then(()=>{
                  return ["confirm", "Session started"];
                })         
            }
          } 
        })
    }
  }
}