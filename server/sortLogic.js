module.exports = (string) => {
  let charArray = string.split('');
  //sort the string charchters and return the sorted string
  charArray.sort((a, b) => {
    return b.charCodeAt() - a.charCodeAt();
  });
  return charArray.join('');
}