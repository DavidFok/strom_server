module.exports = function makeDataHelpers(knex) {
    return {
        serveParkadeData: () => {
            let parkades = knex.select().table('parkades');
            parkades.then((rows) => {
                console.log("===========================parkades is: ", rows)
            });
            return parkades;
        }
    }
}