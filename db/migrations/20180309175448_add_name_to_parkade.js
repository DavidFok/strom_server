exports.up = function(knex, Promise) {
    // adding column which ties the parking spot to a parkade
    return knex.schema.table('parkades', function(table){
      table.string('name');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('parkades', function(table){
      table.dropColumn('name');
    });
  };