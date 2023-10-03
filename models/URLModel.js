class URLModel {
  constructor(id, shortURL, originalURL, clicks = 0) {
    this.id = id;
    this.shortURL = shortURL;
    this.originalURL = originalURL;
    this.clicks = clicks;
  }
}
module.exports = URLModel;