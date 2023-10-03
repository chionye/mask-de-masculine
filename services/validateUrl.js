class ValidateUrl {

  constructor(url) {
    this.url = url;
  }

  isUrlValid() {
    return /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(
      this.url
    );
  }

  setUrl(url){
    this.url = url;
  }
}

module.exports = ValidateUrl;