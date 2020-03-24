// metodo up é o reponsavel pela criação
exports.up = function(knex) {
    return knex.schema.createTable('ongs_', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
  };
  //Esse é metodo é caso dê erro, desfazer.
  exports.down = function(knex) {
  
    return knex.schema.dropTable('ongs_');
  };
  