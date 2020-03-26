
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf').notNullable();
});
};

//método down normalmente usa quando deu algum erro, então coloca pra deletar a tabela
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
