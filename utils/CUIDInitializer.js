const { init } = require("@paralleldrive/cuid2");

class CUIDInitializer {
  constructor(length) {
    this.createId = init({
      random: Math.random,
      length: length,
      fingerprint: "a-custom-host-fingerprint",
    });
  }
}

module.exports = CUIDInitializer;