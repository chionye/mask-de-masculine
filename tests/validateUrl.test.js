/** @format */

const isValidUrl = require("../utils/validateUrl");

describe("validates the url is right", () => {
  test("returns true if url is valid", () => {
    expect(isValidUrl("https://www.jsowl.com")).toBe(true);
  });

  test("returns false if url is invalid", () => {
    expect(isValidUrl("htt//jsowl")).toBe(false);
  });

  test("returns false if url is invalid", () => {
    expect(isValidUrl("www.jsowl.com")).toBe(false);
  });

  test("returns true if url is valid", () => {
    expect(
      isValidUrl(
        "https://www.jsowl.com/remove-an-item-from-an-array-in-javascript/"
      )
    ).toBe(true);
  });
});
