//IMPORTS
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Accounts = require('./models/accounts');
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/test'
//let Account = new Account({ name: String, balance: Number})
//let Account = mongoose.model('Account', { name: String, balance: Number})
let app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/test')

  app.post('/accounts', (req, res) => {
    let newAccount = new Accounts(req.body);
    console.log((req.body));
    newAccount.save(newAccount,(err, results) => {
      if (err) {
        console.error(err)
        process.exit(1)
      } else {
        console.log('Saved: ', results)
        res.send(results)
      }
  })
})

app.get('/accounts',(req,res) => {

  Accounts.find(function(err,account){
    console.log(account);
    res.send(account);
  })

})

app.get('/accounts/:id',(req,res) => {
const id_account = req.params.id;
  Accounts.findById({_id: id_account},function(err,account){
    console.log(account);
    res.send(account);
  })
})

//PUT /accounts/:id

app.put('/accounts/:id',(req,res) => {
const id_account = req.params.id;
  Accounts.findByIdAndUpdate(id_account,req.body,function(err,account){
    console.log(account);
    res.send(account);
  })
})

app.delete('/accounts/:id',(req,res) => {
const id_account = req.params.id;
  Accounts.findByIdAndRemove(id_account,function(err,account){
    console.log(account);
    res.send(account);
  })
})

app.listen(3000)
