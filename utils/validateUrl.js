const validateUrl = (url) => {
  return /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(
    url
  );
};

module.exports = validateUrl;
