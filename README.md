# 🏥 Mapa de Competências - Centro de Diagnósticos Lucilo Ávila

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)

## 📋 Sobre o Projeto

Sistema interno desenvolvido para o **Centro de Diagnósticos Lucilo Ávila** que permite o mapeamento e avaliação de competências dos colaboradores através de uma interface web intuitiva.

**Funcionalidades principais:**
- ✅ **Cadastro de colaboradores** com dados completos
- ✅ **Sistema de avaliação** por competências (0-3)
- ✅ **Histórico visual** com filtros avançados
- ✅ **Interface responsiva** e amigável

## 🏗️ Estrutura do Projeto
```
CDLA_Mapa_de_Competencia/
├── 📁 banco/
│ ├── 📄 avaliacoes.json # Armazena todas as avaliações
│ └── 📄 colaboradores.json # Cadastro de colaboradores
│
├── 📁 functions/ # Futuras funções do sistema
│ └── 🔧 (em desenvolvimento)
│
├── 📁 public/ # Interface do usuário
│ ├── 🌐 index.html # Menu principal
│ ├── 👥 colaborador.html # Cadastro de colaboradores
│ ├── 📊 avaliacao.html # Formulário de avaliação
│ └── 📈 visualizar.html # Visualização de histórico
│
├── ⚙️ server.js # Servidor Node.js principal
└── 🚀 start_server.bat # Inicializador do sistema
```


## 🎯 Telas do Sistema

### 1. 🏠 Página Principal (`index.html`)
- Menu de navegação com três opções:
  - **Colaborador** → Cadastro de funcionários
  - **Avaliação** → Formulário de competências
  - **Histórico** → Visualização de avaliações

### 2. 👥 Cadastro de Colaboradores (`colaborador.html`)
**Campos do formulário:**
- Matrícula (texto)
- Nome do colaborador (texto)
- Condição (select: Ativo/Desligado)
- Cargo (texto)
- Setor (texto)
- Unidade (texto)

**Funcionalidade:** Salva dados via POST em `/salvar-colaborador`

### 3. 📊 Avaliação de Competências (`avaliacao.html`)
**Campos do formulário:**
- ID da Avaliação (automático, readonly)
- Avaliador (texto)
- Matrícula do Colaborador (texto)
- Ano de Referência (texto, 4 dígitos)
- Data da Avaliação (date)
- 5 Competências (select: 0, 1, 2, 3)

**Funcionalidade:** Salva avaliações via POST em `/salvar-avaliacao`

### 4. 📈 Visualização de Histórico (`visualizar.html`)
**Sistema de filtros:**
- Colaborador (texto)
- Ano de Referência (texto)
- Setor (texto)
- Unidade (texto)

**Exibição em cards com:**
- Nome do colaborador
- Nome do avaliador
- Ano de referência
- Data da avaliação
- Notas das 5 competências

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript Vanilla
- **Backend:** Node.js + Express
- **Armazenamento:** JSON files
- **Comunicação:** Fetch API + JSON

## ⚡ Como Executar

### Método Simplificado:
1. Execute o arquivo `start_server.bat`
2. Acesse: `http://localhost:3000`
3. Sistema pronto para uso

### Método Desenvolvimento:
```
bash
cd D:\REPOSITORIOS\CDLA_Mapa_de_Competencia
node server.js
```

# 📊 Estrutura de Dados
## colaboradores.json
```
{
  "colaboradores": [
    {
      "id": 1736376283745,
      "matricula": "12345",
      "nome_colaborador": "João",
      "condicao": "ativo",
      "cargo": "Técnico em Radiologia",
      "setor": "Imagem",
      "unidade": "Centro"
    }
  ]
}
```
## avaliacoes.json
```
{
  "avaliacoes": [
    {
      "id": 1736376354822,
      "id_avaliacao": "ID gerado automaticamente",
      "avaliador": "Maria Souza",
      "matricula_colaborador": "12345",
      "ano_referencia": "2025",
      "data_avaliacao": "2025-01-15",
      "competencia_01": "3",
      "competencia_02": "2",
      "competencia_03": "3",
      "competencia_04": "1",
      "competencia_05": "2"
    }
  ]
}
```

## 🔌 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/salvar-colaborador` | Salva um novo colaborador no sistema |
| `POST` | `/salvar-avaliacao` | Registra uma nova avaliação de competências |
| `GET` | `/avaliacoes` | Retorna todas as avaliações cadastradas |
| `GET` | `/colaboradores` | Retorna todos os colaboradores cadastrados |

##👥 Público-Alvo

- Gestores e supervisores do CDLA
- Coordenadores de departamento
- Recursos Humanos
- Líderes de equipe

##🔒 Segurança e Privacidade

- Dados armazenados localmente na rede interna
- Acesso restrito à rede da clínica
- Informações confidenciais protegidas
- Backup regular dos arquivos JSON

## 🚀 Próximas Melhorias

- Sistema de login e autenticação
- Relatórios em PDF
- Dashboard gerencial
- Gráficos de evolução
- Módulo de metas e objetivos

## 👨💻 Desenvolvimento e Suporte

### **Desenvolvido por:**
**Matheus "DevFari" Henrique**  
📧 [LinkedIn](https://www.linkedin.com/in/matheus-henrique-gpti/)  
🏥 *Centro de Diagnósticos Lucilo Ávila - Departamento de TI*

### **📞 Suporte Técnico:**
Para reportar problemas, sugerir melhorias ou obter suporte:

- **E-mail:** ti@luciloavila.com.br
- **Responsável técnico:** Matheus Henrique - Analista de sistemas

---

**Centro de Diagnósticos Lucilo Ávila**  
*Excelência em Diagnóstico por Imagem desde 1985*

🏥 **Compromisso com o desenvolvimento e qualidade de nossas equipes**

*Sistema desenvolvido para uso interno - Versão 1.0 - Janeiro 2024*
