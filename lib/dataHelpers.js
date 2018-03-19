const bcrypt = require('bcrypt');
const numSalts = 10;

const moment = require('moment');


module.exports = function makeDataHelpers(knex) {
  return {


    serveParkadeData: () => {
      return knex
        .select("*")
        .from('parkades')
        .leftJoin('addresses', 'parkades.address_id', '=', 'addresses.aid')
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
              phone_number: newUser.phone_number,
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


    getSpots: (parkadeId) => {
      return knex
        .select()
        .from('parking_spots')
        .where('parkade_id', '=', parkadeId)
    },


    getCurrentChargeSessions: (spotsArr) => {
      var promises = []; 
      for (let spot of spotsArr) {
        let query = knex('sessions')
          .where({ spot_id: spot.id })
          .orderBy('id', 'desc')
          .limit(1)
          .then((res) => { 
            spot['lastSession'] = res;
          });
        promises.push(query);
      }
      return Promise.all(promises).then(() => {
        return spotsArr;
      })
    },


    checkForSpot: (spotId) => {
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
                .returning(["parkade_id", "handicap"])
                .then((parkadeInfo)=>{
                  // define which column to increment
                  let spot = (() => {
                    if (parkadeInfo[0].handicap) return 'occupied_handicap';
                    else return 'occupied_regular';
                  })();

                  // increment count in parkades table
                  return knex('parkades')
                    .where("id", "=", parkadeInfo[0].parkade_id)
                    .increment(spot, 1)
                })
                .then(() => {
                  return ["confirm", "Session started"];
                })         
            }
          } 
        })
    },


    // CREATE NEW CHARGING SESSION
    createSession: (userId, spotId) => {
      return knex('sessions')
        .insert({
          spot_id: spotId,
          user_id: userId,
          charge_start: moment(),
          charge_end: moment().add(30, 'minutes'),
          time_limit: 30,
          overtime: false
        })
        .returning(["id", "charge_end", "spot_id"])
    },


    // RETURNS PHONE NUMBER OF USER GIVEN A USER ID
    findPhoneNumberOfUser: (userId) => {
      return knex('users').select('phone_number').where({'id': userId});
    },


    checkChargingSessions: (userId) => {
      return knex('sessions').where({'user_id': userId});
    },

    
    // Clears spot & updates parkade availability upon completion of charging session
    makeSpotAvailable: (spotId) => {
      knex('parking_spots')
      .where({ id: spotId})
      .update({ in_use: false })
      .returning(["parkade_id", "handicap"])
      .then((result) => {
        let spot = (() => {
          if (result[0].handicap) return 'occupied_handicap';
          else return 'occupied_regular';
        })();
        
        return knex('parkades')
        .where("id", "=", result[0].parkade_id)
        .decrement(spot, 1)
      })
      .then(console.log(`parking spot #${spotId} is now vacant`))
    }, 
    
    // Timer for asynchronous invocation of makeSpotAvailable 
    chargeEndTimer: (endtime, spotId, cb) => {
      let exeTime = Date.parse(endtime) - Date.now();
      // let exeTime = 25000;
      setTimeout(() => {cb(spotId)}, exeTime);
    },

    
  //　===================================================================
  //　=========================== END OF RETURN =========================
  //　===================================================================    
  }
}