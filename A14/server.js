const routes = require('./routes/index.js');
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

let store = {};
//store.posts = [{id: 0, name: 'ivancito', url: 'google.es', text: 'hola a todos' , comments: [{text: 'hola prueba comentario'}, {text: 'hola prueba comentario 2'}]}];
store.posts = [];


//INSTANTATIONS
let app = express()

//Middleware
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//GET and POST /posts
app.get('/posts', (req, res) => {

  routes.posts.getPosts(req,res,store);

})

app.post('/posts', (req, res) => {

  routes.posts.addPost(req,res,store);

})

//PUT and DELETE /posts/:postId/

app.put('/posts/:id',(req,res) =>{

  routes.posts.updatePost(req,res,store);

})

app.delete('/posts/:id',(req,res)=>{

  routes.posts.removePost(req,res,store);

})

//GET and POST /posts/:postId/comments

app.get('/posts/:postId/comments', (req, res) => {

  routes.comments.getComments(req,res,store);

})

app.post('/posts/:postId/comments', (req, res) => {

  routes.comments.addComment(req,res,store);

})

//PUT and DELETE /posts/:postId/comments/commentId
app.put('/posts/:postId/comments/:commentsId', (req, res) => {

  routes.comments.updateComment(req,res,store);

})

app.delete('/posts/:postId/comments/:commentsId',(req,res) =>{

  routes.comments.removeComment(req,res,store)

})

app.listen(3000)
