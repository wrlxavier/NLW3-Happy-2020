import express from 'express';

import path from 'path';

import cors from 'cors';

import 'express-async-errors'

import errorHandler from './errors/handler'

import './database/connection';
import routes from './routes';



const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
 


app.listen(3333);







/*

tempo de video: 47:59

Tipos de bancos de dados:

Driver nativo, Query builder, ORM

ORM -> Object Relational Mapping (maior nivel de abstração)

*/


// REQ - RESP
// localhost:3333




// ROTA: conjunto

// RECURSO: usuario

//metodos http: get, post, put, delete

// GET: buscar informação
// POST: criar uma informação nova
// PUT: Editar alguma informação
// DELETE: deletar alguma informação

//PARAMETROS

// Query: http://localhost:3333/users?search=warley&page2
// Rout Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users

/*

app.post('/users/:id', (request, response) => {

    console.log(request.query);
    console.log(request.params);
    console.log(request.body);


    return response.json({ message: 'Hello World!' });
});

*/