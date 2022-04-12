exports.up = function (knex) {
    return knex.schema.createTable("cursos", (table) => {
        table.increments();
        table.string("instituicao", 80).notNullable();
        table.string("nomeCurso", 20).notNullable();
        table.string("fone", 20).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("cursos");
};
