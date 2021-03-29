const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    return false;
  }
  arr.forEach((el) =>
    typeof el === "string"
      ? result.push(el.replace(/ /g, "").toUpperCase()[0])
      : false
  );
  return result.sort().join("");
};
