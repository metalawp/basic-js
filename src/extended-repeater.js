const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addition = options.addition || '';
  options.addition === false ? addition = 'false' : false;
  options.addition === null ? addition = 'null' : false;
  let additionSeparator = options.additionSeparator || '|';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let repeatTimes = options.repeatTimes || 1;
  return (str+(addition+additionSeparator).repeat(additionRepeatTimes-1)+addition+separator).repeat(repeatTimes-1)+(str+(addition+additionSeparator).repeat(additionRepeatTimes-1)+addition);
};
