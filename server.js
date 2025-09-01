const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 3000;

const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const matricula = req.body.matricula;
        const fileExtension = path.extname(file.originalname);
        cb(null, `${matricula}${fileExtension}`);
    }
});
const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Rota para salvar dados de colaboradores com upload de arquivo
app.post('/salvar-colaborador', upload.single('foto'), (req, res) => {
    const filePath = path.join(__dirname, 'banco', 'colaboradores.json');
    
    const novoColaborador = {
        matricula: req.body.matricula,
        nome_colaborador: req.body.nome_colaborador,
        condicao: req.body.condicao,
        cargo: req.body.cargo,
        setor: req.body.setor,
        unidade: req.body.unidade,
        foto: req.file ? `/uploads/${req.file.filename}` : null
    };

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao ler o arquivo de colaboradores.');
        }

        const colaboradores = JSON.parse(data);
        const index = colaboradores.findIndex(c => c.matricula === novoColaborador.matricula);
        if (index !== -1) {
            colaboradores[index] = novoColaborador;
        } else {
            colaboradores.push(novoColaborador);
        }

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

// Rota para buscar todas as avaliações
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

// Rota para buscar todos os colaboradores
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

// Rota para buscar todas as competências
app.get('/competencias', (req, res) => {
    const filePath = path.join(__dirname, 'banco', 'competencias.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar as competências.');
        }
        res.status(200).json(JSON.parse(data));
    });
});

// Rota para buscar todos os grupos
app.get('/grupos', (req, res) => {
    const filePath = path.join(__dirname, 'banco', 'grupos.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao buscar os grupos.');
        }
        res.status(200).json(JSON.parse(data));
    });
});

// Rota para salvar um novo grupo
app.post('/salvar-grupo', (req, res) => {
    const novoGrupo = req.body;
    const filePath = path.join(__dirname, 'banco', 'grupos.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao ler o arquivo de grupos.');
        }

        const grupos = JSON.parse(data);
        grupos.push(novoGrupo);

        fs.writeFile(filePath, JSON.stringify(grupos, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao salvar o grupo.');
            }
            res.status(200).send('Grupo salvo com sucesso!');
        });
    });
});

// NOVA ROTA: Salvar uma nova competência
app.post('/salvar-competencia', (req, res) => {
    const { nome } = req.body;
    const filePath = path.join(__dirname, 'banco', 'competencias.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao ler o arquivo de competências.');
        }

        const competencias = JSON.parse(data);
        const novoId = `comp${competencias.length + 1}`; // Gera um novo ID simples
        const novaCompetencia = { id: novoId, nome: nome };
        competencias.push(novaCompetencia);

        fs.writeFile(filePath, JSON.stringify(competencias, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Erro ao salvar a competência.');
            }
            res.status(200).send('Competência salva com sucesso!');
        });
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});