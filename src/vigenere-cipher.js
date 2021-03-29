const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }
  encrypt(str, code) {
    str = str.toUpperCase();
    code = code
      .toUpperCase()
      .repeat(Math.floor(str.length / code.length) + code.length);
    let encrypted = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (/[^A-Za-z_]/g.test(str[i])) {
        encrypted += str[i];
        j--;
      } else
        encrypted +=
          alphabet[(str.charCodeAt(i) + code.charCodeAt(j)) % alphabet.length];
    }
    return this.reverse == false
      ? encrypted.split("").reverse().join("")
      : encrypted;
  }
  decrypt(encrypted, code) {
    encrypted = encrypted.toUpperCase();
    code = code
      .toUpperCase()
      .repeat(Math.floor(encrypted.length / code.length) + code.length);
    let decrypted = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0, j = 0; i < encrypted.length; i++, j++) {
      if (/[^A-Za-z_]/g.test(encrypted[i])) {
        decrypted += encrypted[i];
        j--;
      } else
        decrypted +=
          alphabet[
            (encrypted.charCodeAt(i) + alphabet.length - code.charCodeAt(j)) %
              alphabet.length
          ];
    }
    return this.reverse == false
      ? decrypted.split("").reverse().join("")
      : decrypted;
  }
}

module.exports = VigenereCipheringMachine;
