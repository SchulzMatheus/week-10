const { Router } = require('express'); //importando express
const axios = require('axios');  //exportando axios para pegar api do github
const Dev = require('./models/Dev');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router(); //criando a constanto routes
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);
module.exports = routes; //exportando o mongoose