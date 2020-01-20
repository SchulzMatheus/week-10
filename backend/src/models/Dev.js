const mongoose = require('mongoose'); //exportando mongoose
const PointSchema = require('./utils/PointSchema') //exportando o PointSchema

 //Schema é a estruturação de uma entidade dentro do bdd
const DevSchema = new/*se reprete sempre que vai criar um mondel, pela documentacao do mongoose*/mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        indexes: '2dsphere'
    }
});

module.exports = mongoose.model('Dev', DevSchema); //exportando o models DEV e definindo suas entidades.