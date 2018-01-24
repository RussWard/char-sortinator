const sort = (req, res) => {
  let charArray = req.body.string.split('');
  //sort the string charchters and return the sorted string
  charArray.sort((a, b) => {
    return b.charCodeAt() - a.charCodeAt();
  });
  let response = charArray.join('');
  response = JSON.stringify(response);
  res.status(200);
  res.send(response);
}

module.exports = { sort }