# Aplicação Santo-App

## Descrição Geral

O Santo-App é uma aplicação completa de gerenciamento de produtos, desenvolvida para uma empresa fictícia chamada Adventure Works Cycles, que comercializa bicicletas e acessórios. A aplicação consiste em um backend RESTful e um frontend interativo, ambos desenvolvidos com tecnologias modernas e orquestrados com Docker para garantir um ambiente de execução isolado e consistente.

## Estrutura Geral

### Backend

O serviço de backend fornece uma API para operações CRUD (Create, Read, Update, Delete) em produtos. Ele é construído utilizando Node.js, Express e TypeScript, com o TypeORM como ORM para interagir com o banco de dados PostgreSQL.

### Frontend

O frontend é uma interface de usuário construída com React e TypeScript, que permite aos usuários gerenciar produtos de forma intuitiva e responsiva. A interface oferece funcionalidades como criação, visualização, edição e exclusão de produtos.

---

## Instruções de Configuração

### Clonagem do Repositório

Para começar, clone o repositório da aplicação e navegue até o diretório do backend:

```bash
cd santo-app/backend
```

### Instalação das Dependências

Instale as dependências necessárias para cada serviço (backend e frontend) executando o seguinte comando dentro dos diretórios correspondentes:

```bash
yarn install
```

### Configuração de Variáveis de Ambiente

Crie um arquivo `.env` no diretório `santo-app/backend` e configure as seguintes variáveis de ambiente:

```env
DATABASE_HOST=localhost
DATABASE_USER=postgres
DATABASE_PASSWORD=password
DATABASE_NAME=mydatabase
PORT=8181
```

**Nota:** Para o ambiente de desenvolvimento local, você pode utilizar um arquivo `.env.local`.

### Configuração do Banco de Dados

Para que o backend funcione corretamente, é necessário ter um banco de dados PostgreSQL com o dataset AdventureWorks. Se você não possui esse banco de dados configurado, siga estas etapas:

1. **Configuração Inicial**: 
   - Use uma ferramenta como DBeaver para criar e configurar o banco de dados.
   - Importe os dados do AdventureWorks a partir dos arquivos CSV disponibilizados.

2. **Configuração Automática com Migrations**:
   - Caso prefira, a aplicação pode criar as tabelas automaticamente utilizando as migrations integradas.

### Execução do Backend

Inicie o servidor do backend localmente:

```bash
yarn dev
```

Acesse a documentação da API em `http://localhost:8181/api-docs`.

---

## Docker e Orquestração de Containers

A aplicação foi configurada para ser executada tanto localmente quanto em contêineres Docker. Para rodar os serviços de frontend e backend orquestrados com Docker:

### Configuração do Docker

1. **Arquivo `.env`**:
   Certifique-se de que as variáveis de ambiente no arquivo `.env` estão configuradas corretamente para o ambiente Docker:

   ```env
   DB_HOST=hacka-santo-db
   DB_USERNAME=postgres
   DB_PASSWORD=123456
   DB_NAME=AdventureWorks
   DB_PORT=5432
   FRONTEND_PORT=80
   BACKEND_PORT=8080
   ```

2. **Docker Compose**:
   Utilize o Docker Compose para orquestrar os serviços. O arquivo `docker-compose.yml` define os serviços de frontend, backend e banco de dados:

   ```bash
   docker-compose up --build
   ```

   A aplicação estará disponível nos seguintes links:

   - **Frontend**: [http://localhost:80](http://localhost:80)
   - **Backend (API e Swagger)**: [http://localhost:8080/api-docs](http://localhost:8080/api-docs)

---

## Funcionalidades Principais

### Backend

- **CRUD de Produtos**:
  - `GET /api/products`: Lista todos os produtos com suporte a paginação, ordenação e filtros.
  - `GET /api/products/:id`: Retorna os detalhes de um produto específico.
  - `POST /api/products`: Cria um novo produto.
  - `PUT /api/products/:id`: Atualiza um produto existente.
  - `DELETE /api/products/:id`: Exclui um produto existente.

### Frontend

- **Criação de Produtos**: Adicionar novos produtos ao sistema.
- **Visualização de Produtos**: Exibir uma lista de produtos existentes.
- **Atualização e Exclusão de Produtos**: Editar e excluir produtos.
- **Paginação**: Navegar entre diferentes páginas da lista de produtos.

---

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express
  - TypeScript
  - TypeORM
  - PostgreSQL
  - Docker
  - Swagger

- **Frontend**:
  - React
  - TypeScript
  - CSS
  - Axios

---

## Considerações Finais

A documentação da API é gerada automaticamente e pode ser acessada através dos links fornecidos, dependendo do ambiente de execução (local PORT 8181 ou Docker PORT:8080). Esta aplicação demonstra como combinar uma arquitetura robusta com orquestração de contêineres para criar uma solução completa de gerenciamento de produtos para um comércio.