const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router)

app.listen('8080',() => {
  console.log('app is listening on port 8080')
});