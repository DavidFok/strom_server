module.exports = function makeDataHelpers(knex) {
    return {
        
        serveParkadeData: () => {
            return knex.select("*").from('parkades')
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
                            password_digest: newUser.password_digest,
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
                resolve(true);
              })
            } else {
              return new Promise((resolve, reject) => {
                resolve(false);
              })
            }
        },
    }
}