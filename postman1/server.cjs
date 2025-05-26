const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const filePath = 'dados.json';

function lerDados() {
  if (fs.existsSync(filePath)) {
    const conteudo = fs.readFileSync(filePath);
    try {
      const dados = JSON.parse(conteudo.length ? conteudo : '[]');
      return Array.isArray(dados) ? dados.filter(Boolean) : [];
    } catch {
      return [];
    }
  }
  return [];
}

function salvarDados(dados) {
  fs.writeFileSync(filePath, JSON.stringify(dados, null, 2));
}

// GET - retorna todos os cadastros
app.get('/cadastro', (req, res) => {
  const dados = lerDados();
  res.json(dados);
});


app.post('/cadastro', (req, res) => {
  const novoDado = req.body;
  const dados = lerDados();


  const nextId = dados.length > 0 ? Math.max(...dados.map(d => d.id || 0)) + 1 : 1;
  novoDado.id = nextId;

  dados.push(novoDado);
  salvarDados(dados);
  res.send('Dados salvos com sucesso!');
});


app.put('/cadastro/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const dados = lerDados();
  const index = dados.findIndex(d => d.id === id);

  if (index !== -1) {
  
    dados[index] = { ...req.body, id };
    salvarDados(dados);
    res.send('Cadastro atualizado!');
  } else {
    res.status(404).send('Cadastro não encontrado!');
  }
});


app.delete('/cadastro/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  let dados = lerDados();
  const index = dados.findIndex(d => d.id === id);

  if (index !== -1) {
    dados.splice(index, 1);
    salvarDados(dados);
    res.send('Cadastro removido!');
  } else {
    res.status(404).send('Cadastro não encontrado!');
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
