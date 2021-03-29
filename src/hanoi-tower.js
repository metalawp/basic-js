const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNumber = Math.pow(2, disksNumber) - 1;
  let secondsNumber = Math.floor((3600 / turnsSpeed) * turnsNumber);
  let result = {
    turns: turnsNumber,
    seconds: secondsNumber,
  };
  return result;
};
