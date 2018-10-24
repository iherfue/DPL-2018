var express = require('express');
var path = require('path');
var morgan = require('morgan');
var app = express();

app.use(morgan('combined'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res){

  res.render('index' , {title:'Guru99',message:'Welcome'});

});

var server = app.listen(3000, function(){

})

//Rutas en express

app.route('/Node').get(function(req,res){

  res.render('index' , {title: 'Pagina1' , message: 'Hola estas en la Página de Node' })

});

app.route('/Angular').get(function(req,res){

  res.send("Tutorial on Angular");

});

app.route('/About').get(function(req,res){

  res.render('index' , {title: 'About' ,
   nombre: 'Hola me llamo Iván Hernández Fuentes',
   edad: 'Tengo 18 años',
   localidad: 'Vivo en Fuerteventura,Canarias,España'})

});

app.get('/' , function(req, res){

  res.send("Welcome to Guru99 Tutorials");

});
