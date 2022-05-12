const express = require('express')
const app = express()
const port = 3000

const routes = require("./routes");

// middleware para aceitar dados no formato JSON 
app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
  res.send('Controle de Alunos. Seja Bem-vindo!')
})


app.listen(port, () => {
  console.log(`Servidor em execução na porta: ${port}`)
})
