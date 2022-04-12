exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('alunos').del()
  await knex('alunos').insert([
    { nome: "Rógerio Almeida Santos", dtnascimento: "04/04/1997", fone: "3225.0012", bairro: "Fragata", cep: "96050-780", curso_id: 1 },
    { nome: "Lizandra Barros da Cunha", dtnascimento: "19/12/2000", fone: "3225.2554", bairro: "Centro", cep: "96050-110", curso_id: 2 },
    { nome: "João Carlos Ribeiro", dtnascimento: "30/10/1989", fone: "3225.9784", bairro: "Três Vendas", cep: "96050-486", curso_id: 3 },
    { nome: "Luana Farias Santos", dtnascimento: "12/01/1991", fone: "3225.1230", bairro: "Fragata", cep: "96050-781", curso_id: 1 },
    { nome: "Carla Rodrigues Borges", dtnascimento: "28/10/2002", fone: "3225.7978", bairro: "Laranjal", cep: "96080-550", curso_id: 4 }

  ]);
};
