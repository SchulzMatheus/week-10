const express = require('express'); //chamando o express
const mongoose = require('mongoose'); //chamando mongoose (banco de dados)
const routes = require ('./routes') //chamando os routes, codigo onde vamos armazenar nossas rotas
const cors = require('cors');
const app = express();
mongoose.connect('mongodb+srv://nokia232:friend@cluster0-t3atk.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); // ativando o mongoose

app.use(cors("http://192.168.1.7:3000/"));
app.use(express.json()); 
app.use(routes) //Usando a constante routes por sempre depois do json

/*
Principais metodos HTTPS 
get:  Buscar informação, listar usuario.
post: Criar uma informação, criar produto, cadastrar usuario
put: Editar uma informação, alterar produto, alterar usuario
delete: excluir uma informação, deletar produto, deletar usuario
*/
/*
Tipos de parâmetros
Query Params: request.query (filtros, ordenação, paginação...) (metodos get 90% das vezes)
Route Params: request.params (Identificar um recurso na alteração ou remoção) (put and delete)
body: request.body (dados para criacao ou açteraca de um registro) (Post and Put)
 */




app.listen(3333); //definindo a porta do localhost