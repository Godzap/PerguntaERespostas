const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
//Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })


// Avisando o express para usar o  EJS como view engine
app.set('view engine','ejs');
app.use(express.static('public'));

// bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Rotas
app.get("/",(req, res) => {
    res.render("index");
});



app.get("/perguntar",(req, res) =>{
    res.render("perguntar");
})

app.post("/salvarpergunta",(req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido" + titulo + "" + "Descricao" + descricao);


});
app.listen(8080,()=>{console.log("bababoi");});