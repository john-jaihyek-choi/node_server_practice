const express = require('express');
const fortunes = require('./data/fortunes.json')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/fortunes', (req, res) => {

    res.json(fortunes);
})

app.get('/fortunes/random', (req, res) => {
    res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
})

app.get('/fortunes/:id', (req, res) => {
    res.json(fortunes.find( fortune => fortune.id == req.params.id))
})

app.post('/fortunes', (req, res) => {
    
    console.log(req.body);
})


module.exports = app;