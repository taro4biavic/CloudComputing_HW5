const express = require('express');
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express();


MongoClient.connect('mongodb+srv://haoyu:6666@cluster0.i3wwz.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology: true}).then(client => {
        console.log('Connected to Database')
        const db = client.db('sponge-quotes')
        const quotesCollection = db.collection('quotes')
app.listen(3000,function() {
        console.log('listening on 3000')})
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req,res) => {
  db.collection('quotes').find().toArray().then(results => {console.log(results)}).catch(error => console.error(error))
  res.render('index.ejs',{})
})
app.post('/quotes', (req,res) => {
        quotesCollection.insertOne(req.body).then(result => {res.redirect('/')}).catch(error => console.error(error))
})

}).catch(console.error)
