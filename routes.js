const express = require("express");
const routes = express.Router();

const alunosController = require("./controllers/alunos");
const cursosController = require("./controllers/cursos");

routes.get("/alunos", alunosController.index)
    .post("/alunos", alunosController.store)
    .put("/alunos/:id", alunosController.update)
    .delete("/alunos/:id", alunosController.destroy)
    .get("/alunos/filtro/:palavra", alunosController.filter)
    .get("/alunos/cursos", alunosController.dados);


routes.get("/cursos", cursosController.index)
    .post("/cursos", cursosController.store)
    .put("/cursos/:id", cursosController.update)
    .delete("/cursos/:id", cursosController.destroy)
    .get("/cursos/resumo", cursosController.abstract);





module.exports = routes;