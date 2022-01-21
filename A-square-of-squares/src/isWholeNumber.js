module.exports = function isWholeNumber(n) {
    if (n % 1 === 0) {
      console.log(n + ' is a whole number');
      return true;
    } else {
      console.log(n + ' is not a whole number');
      return false;
    }
}