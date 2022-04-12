exports.up = function (knex) {
    return knex.schema.createTable("alunos", (table) => {
        table.increments();
        table.string("nome", 80).notNullable();
        table.string("dtnascimento", 11).notNullable();
        table.string("fone", 20).notNullable();
        table.string("bairro", 20).notNullable();
        table.string("cep", 8).notNullable();

        table.integer("curso_id").notNullable().unsigned();
        table.foreign("curso_id")
            .references("cursos.id");
            // .onDelete("restrict")
            // .onUpdate("cascade")
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("alunos");
};
