const axios = require ('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')
/*Funcoes do controller
index, show, store, destroy*/

module.exports = {
    async index(request,response) {
        const devs = await Dev.find();
        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body; //corpo
        let dev = await Dev.findOne({ github_username })
        if (!dev)
        {
             /*variavel para armazenar a api do github */  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`) //acessando a api do github atraves do axios
       /*variavel para armazenar as informaçoes da api github*/ const { name = login , avatar_url, bio } = apiResponse.data; //Desestruturando pra receber apenas as informações necessarias do github
       /*variavel pra consertar a string da entidade "techs" */ const techsArray = parseStringAsArray(techs); //Separando os vetores, map serve pra percorrer o array, e o trim remover espaçamento antes e depois de uma string e o split pra analisar a cada virgula o vetor.
      /*criando o usuario*/ 
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    }
         dev = await Dev.create({
         github_username,
         name,
         avatar_url,
         bio,
         techs: techsArray, /*Apenas esse precisou fazer a chamada da propriedade, pois o nome é diferente. nos outros usamos o short sintax */
         location,
     })
        }
       
        return response.json(dev)
    }
}