module.exports = function makeDataHelpers(knex) {
    return {
        serveParkadeData: () => {
            return knex.select("*").from('parkades')
        }
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