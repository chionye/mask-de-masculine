const ValidateUrl = require("../../services/validateUrl");

describe("ValidateUrl", () => {
  test("should return true for a valid URL", () => {
    const urlValidator = new ValidateUrl("https://www.example.com");
    expect(urlValidator.isUrlValid()).toBe(true);
  });

  test("should return false for an invalid URL", () => {
    const urlValidator = new ValidateUrl("invalid-url");
    expect(urlValidator.isUrlValid()).toBe(false);
  });

  test("should update the URL using setUrl method", () => {
    const urlValidator = new ValidateUrl("https://www.example.com");
    urlValidator.setUrl("https://www.updated-example.com");
    expect(urlValidator.isUrlValid()).toBe(true);
  });
});