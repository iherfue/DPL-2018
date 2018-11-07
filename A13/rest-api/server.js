//IMPORTS
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

let store = {}
store.accounts = []

//INSTANTATIONS
let app = express()

//Middleware
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//ROUTING
//realiza la peticion get enviando todas las cuentas del objeto store
app.get('/accounts', (req, res) => {
  res.status(200).send(store.accounts)
})

//realiza un get donde el segundo parametro (id) obtiene de la url que le pasa al usuario, y luego envia la información sobre esa cuenta
app.get('/accounts/:id', (req, res) => {

  res.status(200).send(store.accounts[req.params.id])

})


app.post('/accounts', (req, res) => {
  let newAccount = req.body
  let id = store.accounts.length
  store.accounts.push(newAccount)
  res.status(201).send({id: id})
})

app.put('/accounts/:id', (req, res) => {
  store.accounts[req.params.id] = req.body
  res.status(200).send(store.accounts[req.params.id])
})

//elimina la cuenta segun el id que se le pasa 
app.delete('/accounts/:id', (req, res) => {
  store.accounts.splice(req.params.id, 1)
  res.status(204).send()
})

app.listen(3000)
