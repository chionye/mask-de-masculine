class InMemoryStorage {
  constructor() {
    this.urlMap = new Map();
    this.nextId = 1;
  }

  save(url) {
    const id = this.nextId++;
    this.urlMap.set(id, url);
    return id;
  }

  getById(id) {
    return this.urlMap.get(id);
  }

  incrementClickCount(id) {
    const url = this.urlMap.get(id);
    if (url) {
      url.clicks++;
    }
  }

  getAll() {
    return Array.from(this.urlMap.values());
  }
}

module.exports = InMemoryStorage