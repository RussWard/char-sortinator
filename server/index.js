const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname, '../client')));

app.post('/sort', (req, res) => {
  let charArray = req.body.string.split('');
  //sort the string charchters and return the sorted string
  charArray.sort();
  res.status(200).send(charArray.join(''));
})

app.listen('8080',() => {
  console.log('app is listening on port 8080')
});