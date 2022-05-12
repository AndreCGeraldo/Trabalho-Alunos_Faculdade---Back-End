const express = require('express');
const router = express.Router();
const { range } = require("express/lib/request");

const dbKnex = require("../data/db_config");

module.exports = {

  // Mostra a listagem dos Alunos
  async index(req, res) {
    try {
      const alunos = await dbKnex("alunos").orderBy("id", "desc");
      res.status(200).json(alunos);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },


  // Faz a inclusão dos alunos do banco
  async store(req, res) {
    const { nome, dtnascimento, fone, bairro, cep, curso_id } = req.body;

    if (!nome || !dtnascimento || !fone || !bairro || !cep || !curso_id) {
      res.status(400).json({ msg: "Enviar nome, dtnascimento, fone, bairro, cep e id de curso do aluno" });
      return;
    }
    try {
      const novo = await dbKnex("alunos").insert({ nome, dtnascimento, fone, bairro, cep, curso_id });
      res.status(201).json({ id: novo[0] });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },


  // Faz a alteração dos alunos
  async update(req, res) {
    const id = req.params.id;
    const { nome, dtnascimento, fone, bairro, cep, curso_id } = req.body;
    try {
      await dbKnex("alunos").update({ nome, dtnascimento, fone, bairro, cep, curso_id }).where("id", id);
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },


  // Faz a exclusão dos alunos
  async destroy(req, res) {
    const { id } = req.params;
    try {
      await dbKnex("alunos").del().where({ id });
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },


  // Executa um filtro de pesquisa por palavra-chave de (dtnascimento, bairro, instituição e nome do curso)
  async filter(req, res) {
    const { palavra } = req.params;
    try {
      const alunos = await dbKnex("alunos").select("nome", "dtnascimento", "alunos.fone", "bairro", "cep", "nomeCurso as nome_curso", "instituicao").innerJoin('cursos', 'curso_id', 'cursos.id')
        .where("dtnascimento", "like", `%${palavra}%`)
        .orWhere("bairro", "like", `%${palavra}%`)
        .orWhere("instituicao", "like", `%${palavra}%`)
        .orWhere("nome_curso", "like", `%${palavra}%`)
      res.status(200).json(alunos);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },


  // Mostra os dados dos alunos, cursos e instituição de cada um
  async dados(req, res) {
    try {
      const alunos = await dbKnex("alunos").select("alunos.id", "nome", "dtnascimento", "alunos.fone", "bairro", "cep", "nomeCurso as nome_curso", "instituicao").innerJoin('cursos', 'curso_id', 'cursos.id')
      res.status(200).json(alunos);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },



}






















