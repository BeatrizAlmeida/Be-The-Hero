const express = require('express');

const OngController = require('./controllers/OngControler');
const IncidentController = require('./controllers/IncidentControler');
const ProfileController = require('./controllers/ProfileControlers');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

// async = função assíncronas retorna uma promise pode conter um await.
// promise epresenta um valor que pode estar disponível agora, no futuro ou nunca.
routes.post('/sessions', SessionController.create );

routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete)

module.exports = routes;