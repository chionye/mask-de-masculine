const CUIDInitializer = require("./CUIDInitializer");

class UniqueIDGenerator extends CUIDInitializer {
  constructor(length) {
    super(length);
  }
  generateID() {
    return this.createId();
  }
}

module.exports = UniqueIDGenerator;
