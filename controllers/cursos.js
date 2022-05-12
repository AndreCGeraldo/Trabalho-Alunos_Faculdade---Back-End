const express = require('express');
const router = express.Router();

const dbKnex = require("../data/db_config");

router.use(express.json());


module.exports = {

  // Mostra a listagem dos Cursos
  async index(req, res) {
    try {
      const cursos = await dbKnex("cursos").orderBy("id", "desc");
      res.status(200).json(cursos);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },


  // Faz a inclusão dos Cursos no Banco
  async store(req, res) {
    const { instituicao, nomeCurso, fone } = req.body;

    if (!instituicao || !nomeCurso || !fone) {
      res.status(400).json({ msg: "Enviar instituição, nomeCurso, e fone do curso" });
      return;
    }
    try {
      const novo = await dbKnex("cursos").insert({ instituicao, nomeCurso, fone });
      res.status(201).json({ id: novo[0] });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },


  // Faz alteração nos Cursos no banco
  async update(req, res) {
    const id = req.params.id;
    const { instituicao, nomeCurso, fone } = req.body;
    try {
      await dbKnex("cursos").update({ instituicao, nomeCurso, fone }).where("id", id);
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },


  // Faz a exclusão dos Cursos no banco
  async destroy(req, res) {
    const { id } = req.params;
    try {
      await dbKnex("cursos").del().where({ id });
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },


  // Mostra o resumo das Instituições e cursos
  async abstract(req, res) {
    try {
      const numDeCursos = await dbKnex("cursos").select("instituicao").count({ numero_de_cursos: "id" }).groupBy("instituicao");
      res.status(200).json(numDeCursos);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },




  
}


















