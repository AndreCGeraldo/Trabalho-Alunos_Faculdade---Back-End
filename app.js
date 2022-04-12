const express = require('express')
const app = express()
const port = 3000

const alunos = require("./alunos")
const cursos = require("./cursos")


app.get('/', (req, res) => {
  res.send('Controle de Alunos. Seja Bem-vindo!')
})

app.use('/alunos', alunos);
app.use('/cursos', cursos);


app.listen(port, () => {
  console.log(`Servidor em execução na porta: ${port}`)
})
