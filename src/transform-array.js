const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  throw new CustomError("Not implemented");
  /* remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("Error");
  }
  if (arr == null) {
    throw new Error("Error");
  }
  let result = arr;
  result.splice(result.indexOf("--discard-next") + 1, 1);
  result.splice(result.indexOf("--discard-prev") - 1, 1);
  return result; */
};
