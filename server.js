const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Rota para salvar dados de colaboradores
app.post('/salvar-colaborador', (req, res) => {
    const novoColaborador = req.body;
    const filePath = path.join(__dirname, 'banco', 'colaboradores.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao ler o arquivo de colaboradores.');
        }

        const colaboradores = JSON.parse(data);
        colaboradores.push(novoColaborador);

        fs.writeFile(filePath, JSON.stringify(colaboradores, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao salvar o colaborador.');
            }
            res.status(200).send('Colaborador salvo com sucesso!');
        });
    });
});

// Rota para salvar dados de avaliações
app.post('/salvar-avaliacao', (req, res) => {
    const novaAvaliacao = req.body;
    const filePath = path.join(__dirname, 'banco', 'avaliacoes.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao ler o arquivo de avaliações.');
        }

        const avaliacoes = JSON.parse(data);
        avaliacoes.push(novaAvaliacao);

        fs.writeFile(filePath, JSON.stringify(avaliacoes, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao salvar a avaliação.');
            }
            res.status(200).send('Avaliação salva com sucesso!');
        });
    });
});

// NOVO ENDPOINT: Rota para buscar todas as avaliações
app.get('/avaliacoes', (req, res) => {
    const filePath = path.join(__dirname, 'banco', 'avaliacoes.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar as avaliações.');
        }
        res.status(200).json(JSON.parse(data));
    });
});

// NOVO ENDPOINT: Rota para buscar todos os colaboradores
app.get('/colaboradores', (req, res) => {
    const filePath = path.join(__dirname, 'banco', 'colaboradores.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar os colaboradores.');
        }
        res.status(200).json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});