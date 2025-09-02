# 📊 Sistema de Mapeamento de Competências

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Open Source](https://img.shields.io/badge/Open_Source-3DA639?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

## 📋 Sobre o Projeto

Sistema web open source para mapeamento e avaliação de competências de colaboradores. Desenvolvido para ser intuitivo e fácil de implementar em qualquer organização.

**Funcionalidades principais:**
- ✅ **Cadastro de colaboradores** com dados completos
- ✅ **Sistema de avaliação** por competências (escala 0-3)
- ✅ **Histórico visual** com filtros avançados
- ✅ **Interface responsiva** e amigável
- ✅ **Armazenamento em JSON** sem necessidade de banco de dados

## 🏗️ Estrutura do Projeto
```
Mapa_de_Competencias/
├── 📁 database/
│ ├── 📄 evaluations.json # Armazena todas as avaliações
│ └── 📄 employees.json # Cadastro de colaboradores
│
├── 📁 public/
│ ├── 🌐 index.html # Menu principal
│ ├── 👥 employee.html # Cadastro de colaboradores
│ ├── 📊 evaluation.html # Formulário de avaliação
│ └── 📈 view.html # Visualização de histórico
│
├── 📁 src/
│ └── 🔧 server.js # Servidor Node.js principal
│
├── ⚙️ package.json # Dependências do projeto
└── 🚀 start_server.bat # Inicializador do sistema (Windows)
```


## 🎯 Telas do Sistema

### 1. 🏠 Página Principal
- Menu de navegação intuitivo
- Acesso rápido a todas as funcionalidades
- Design limpo e profissional

### 2. 👥 Cadastro de Colaboradores
**Campos disponíveis:**
- ID/Matrícula
- Nome completo
- Status (Ativo/Inativo)
- Cargo/Função
- Departamento/Setor
- Unidade/Localidade

### 3. 📊 Avaliação de Competências
**Sistema de avaliação:**
- 5 competências customizáveis
- Escala de 0 a 3 pontos
- Data e avaliador registrados
- ID único automático

### 4. 📈 Visualização de Histórico
**Sistema de filtros:**
- Por colaborador
- Por período/anual
- Por departamento
- Por unidade

**Visualização em cards:**
- Dados completos da avaliação
- Layout organizado
- Fácil comparação

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript Vanilla
- **Backend:** Node.js + Express
- **Armazenamento:** JSON files
- **Comunicação:** Fetch API

## ⚡ Como Executar

### Pré-requisitos:
- Node.js (versão 14 ou superior)
- Navegador web moderno

### Instalação e execução:
bash
```
# Clone o repositório
git clone <url-do-repositorio>

# Acesse o diretório
cd Mapa_de_Competencias

# Instale as dependências
npm install

# Execute o servidor
node src/server.js

# Acesse no navegador
# http://localhost:3000
```

Para Windows:
Execute o arquivo start_server.bat

O sistema estará disponível em http://localhost:3000

## 📊 Estrutura de Dados
- colaboradores.json
```
[
  {
    "matricula": "000000",
    "nome_colaborador": "José da silva",
    "condicao": "ativo",
    "cargo": "Cargo X",
    "setor": "Setor X",
    "unidade": "Matriz",
    "foto": "/uploads/000000.jpeg"
  }
]
```
- evaluations.json
```
[
  {
    "id_avaliacao": "ID gerado automaticamente",
    "avaliador": "Nome_avaliador",
    "matricula_colaborador": "000000",
    "ano_referencia": "2025",
    "data_avaliacao": "2025-07-29",
    "competencia_01": "3",
    "competencia_02": "2",
    "competencia_03": "0",
    "competencia_04": "0",
    "competencia_05": "3",
    "id": 1756734548191
  }
]
```

## 🔌 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/salvar-colaborador` | Salva um novo colaborador no sistema |
| `POST` | `/salvar-avaliacao` | Registra uma nova avaliação de competências |
| `GET` | `/avaliacoes` | Retorna todas as avaliações cadastradas |
| `GET` | `/colaboradores` | Retorna todos os colaboradores cadastrados |

## 🎨 Customização
Personalizar competências:
Edite o arquivo evaluation.html para alterar os nomes das competências:
```
<label for="competencia_01">Liderança</label>
<label for="competencia_02">Comunicação</label>
<label for="competencia_03">Técnica</label>
```
**Adicionar campos:**
Modifique os formulários em employee.html e evaluation.html para incluir novos campos conforme necessidade.

## 👥 Público-Alvo

Este sistema foi desenvolvido para atender às necessidades de:

- **Empresas de qualquer segmento** que necessitem de um sistema de avaliação de competências
- **Departamentos de RH** para gestão do desenvolvimento de colaboradores
- **Gestores e líderes de equipe** para acompanhamento do time
- **Organizações** que precisam mapear e acompanhar competências técnicas e comportamentais

## 🔒 Segurança e Privacidade

- **📁 Dados armazenados localmente** - Total controle sobre as informações
- **💾 Backup simplificado** - Arquivos JSON facilitam cópias de segurança
- **🎯 Controle total** - Você gerencia todos os dados sem dependências externas
- **🌐 Implementação interna** - Possibilidade de deploy em rede local segura

## 🚀 Próximas Melhorias

| Status | Funcionalidade | Descrição |
|--------|----------------|-----------|
| 📋 | **Sistema de autenticação** | Controle de acesso por usuários |
| 📋 | **Relatórios em PDF** | Exportação de avaliações em PDF |
| 📋 | **Dashboard analítico** | Visualização de métricas e indicadores |
| 📋 | **Gráficos de evolução** | Análise temporal do desenvolvimento |
| 📋 | **Módulo de metas** | Definição e acompanhamento de objetivos |
| 📋 | **Exportação para Excel** | Integração com planilhas |
| 📋 | **API REST completa** | Integração com outros sistemas |

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga estes passos:

1. **🍴 Faça um Fork** do projeto
2. **🌿 Crie uma Branch** para sua feature:  
   `git checkout -b feature/AmazingFeature`
3. **💾 Commit suas mudanças:**  
   `git commit -m 'Add some AmazingFeature'`
4. **📤 Push para a Branch:**  
   `git push origin feature/AmazingFeature`
5. **🔃 Abra um Pull Request**

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes completos.

## 👨💻 Desenvolvido por

**Matheus "DevFari" Henrique**  
📧 [LinkedIn](https://www.linkedin.com/in/matheus-henrique-gpti/)  
🐙 [GitHub](https://github.com/devFari)

---

**✨ Um projeto open source para a comunidade**

*Versão 1.0 - Setembro 2025*
