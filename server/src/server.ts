import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333);

// http://localhost:3333/users
// Métodos mais utilizados:
// GET: Buscar ou listar alguma infomação
// POST: Criar alguma nova informação dentro do backend
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente 

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Indentificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação