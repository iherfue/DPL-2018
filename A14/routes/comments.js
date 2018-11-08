//let store = {};
//store.posts = [{id: 0, name: 'ivancito', url: 'google.es', text: 'hola a todos' , comments: ['hola prueba comentario','hola prueba comentario 2']}];
//store.comments = [{id: '0',name: 'ivan', text:'hola'},{id:'1', name: 'andres', text:'escribe hola'}];
const posts = require('./posts.js');

module.exports = {
  getComments(req, res, store) {

    res.status(200).send(store.posts[req.params.postId].comments)
  //res.status(200).send(store.posts[0].comments[1])
  //res.status(200).send(store.comments[1].name)

  },

  addComment(req, res, store) {

  let newComment = req.body
  let id = store.posts.length
  let comments = store.posts[req.params.postId].comments
  comments.push(newComment)
  res.status(201).send({id: id})

  },
  updateComment(req, res,store) {

    store.posts[req.params.postId].comments[req.params.commentsId] = req.body
    res.status(200).send(store.posts[req.params.commentsId])
  },

  removeComment(req, res, store) {

    store.posts[req.params.postId].comments.splice(req.params.commentsId)
    res.status(204).send()
  }
}
