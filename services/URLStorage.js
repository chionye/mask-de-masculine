const InMemoryStorage = require("./InMemoryStorage");

class URLStorage extends InMemoryStorage {
  saveURL(url) {
    return this.save(url);
  }

  getURLById(id) {
    return this.getById(id);
  }

  incrementURLClickCount(id) {
    return this.incrementClickCount(id);
  }

  getAllURLs() {
    return this.getAll();
  }
}
module.exports = URLStorage;
