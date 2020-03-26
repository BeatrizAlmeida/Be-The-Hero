const express=require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');
app.use(cors());
app.use(express.json());

app.use(routes);
/*
    MÉTODOS HTTP
    GET: buscar uma informação do back-end
    POST: criar uma infornmação no back-end
    PUT: alterar uma informação no back-end
    DELETE: deletar uma informação no back-end
*/
/* 
    Tipos de parâmetros:
    Query: paramêtros nomeados enviados na rota após o símbolo "?" (filtros, paginação)
    Route Params: para identificar recursos
    Request body: criar ou alterar recursos ( ex:usuário)
    response retorna uma resposta
*/

/*
    SQL: MYSQL, SQLite, POSTGRESQL
    NOSQL: MongoDB, etc

*/

/*
    Driver: SELECT * from users
    Query builder: table('users').select('*').where()
*/

app.listen(3333);