const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/salvar", (req, res) => {
    const dados = req.body;
    const arquivo = path.join(__dirname, "dados.json");

    fs.readFile(arquivo, (err, data) => {
        let json = [];
        if (!err) json = JSON.parse(data.toString());
        
        json.push(dados);
        fs.writeFile(arquivo, JSON.stringify(json, null, 2), (err) => {
            if (err) return res.status(500).send("Erro ao salvar os dados");
            res.send("Dados salvos com sucesso!");
        });
    });
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
