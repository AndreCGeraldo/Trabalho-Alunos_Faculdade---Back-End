const express = require('express');
const router = express.Router();

const dbKnex = require("./data/db_config");

router.use(express.json());


router.get("/", async (req, res) => {
  try {
    const cursos = await dbKnex("cursos").orderBy("id", "desc");
    res.status(200).json(cursos);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});



router.post("/", async (req, res) => {
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
});


router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { instituicao, nomeCurso, fone } = req.body;
  try {
    await dbKnex("cursos").update({ instituicao, nomeCurso, fone }).where("id", id);
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await dbKnex("cursos").del().where({ id });
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});


router.get("/resumo", async (req, res) => {
  try {
    const numDeCursos = await dbKnex("cursos").select("instituicao").count({ numero_de_cursos: "id" }).groupBy("instituicao");
    res.status(200).json(numDeCursos);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});







module.exports = router;  