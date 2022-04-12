exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('cursos').del()
  await knex('cursos').insert([
    { instituicao: "Faculdade de Tecnologia Senac Pelotas", nomeCurso: "Análise e Desenvolvimento de Sistemas", fone: "3225.6918" },
    { instituicao: "Faculdade Anhanguera Pelotas", nomeCurso: "Marketing Digital", fone: "3226.4850" },
    { instituicao: "Universidade Federal de Pelotas UFPel", nomeCurso: "Redes de Computadores", fone: "3284.3800" },
    { instituicao: "Faculdade de Tecnologia Senac Pelotas", nomeCurso: "Ciência de Dados e Inteligência Analítica", fone: "3225.6918" }
  ]);
};
