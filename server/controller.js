const sortLogic = require('./sortLogic')

const sort = (req, res) => {
  let response = sortLogic(req.body.string);
  response = JSON.stringify(response);
  res.status(200);
  res.send(response);
}

module.exports = { sort }