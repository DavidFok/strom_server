module.exports = function makeDataHelpers(knex) {
    return {
        
        serveParkadeData: () => {
            return knex.select("*").from('parkades')
        },

        checkForUser: (email) => {
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
    }
}


// knex.select("*").from("depts")
// .then(function (dept) {
//     dept.forEach(function(value){
//       console.log(value.deptno);
//     });
//   }).catch(function(err) {
//     // All the error can be checked in this piece of code
//     console.log(err);
//   }).finally(function() {
//     // To close the connection pool
//     knex.destroy();
//   });
// }