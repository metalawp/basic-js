const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr)
      ? 1 +
          Math.max(
            ...arr.map((item) => {
              if (item.length === 0) {
                item.push(1);
              }
              return this.calculateDepth(item);
            })
          )
      : 0;
  }
};
