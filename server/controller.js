const sort = (req, res) => {
  console.log(req.body)
  let charArray = req.body.split('');
  //sort the string charchters and return the sorted string
  charArray.sort();
  let response = charArray.join('');
  response = JSON.stringify(response);
  res.status(200);
  res.send(response);
}

module.exports = { sort }