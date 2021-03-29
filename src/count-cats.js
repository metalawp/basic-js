const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach((el) => (el == "^^" ? counter++ : false));
  }
  return counter;
};
