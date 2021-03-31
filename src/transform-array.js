const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("Error");
  }
  if (arr == null) {
    throw new Error("Error");
  }
  let result = [...arr];
  for (let i = 0; i < result.length; i++ ) {
    switch (result[i]) {
      case "--discard-next": result[i+1] !== undefined ? result.splice(i, 2, undefined, undefined) : result.splice(i, 1, undefined);  continue;
      case "--discard-prev": result[i-1] !== undefined ? result.splice(i - 1, 2, undefined, undefined) : result.splice(i, 1, undefined); continue;
      case "--double-next":  result[i+1] !== undefined ? result.splice(i, 1, result[i + 1]) : result.splice(i, 1, undefined);  continue;
      case "--double-prev":  result[i-1] !== undefined ? result.splice(i, 1, result[i - 1]) : result.splice(i, 1, undefined); continue;
    } 
  }
  return result.filter(el => el !== undefined); 
};
