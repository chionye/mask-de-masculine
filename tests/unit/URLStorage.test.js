/** @format */

const URLStorage = require("../../services/URLStorage");

describe("URLStorage", () => {
  let storage;

  beforeEach(() => {
    storage = new URLStorage();
  });

  test("should save a URL and return a unique ID", () => {
    const id = storage.saveURL({
      id: null,
      shortURL: "short-url",
      originalURL: "original-url",
    });
    expect(id).toBe(1);
  });

  test("should retrieve a URL by ID", () => {
    const urlData = {
      id: null,
      shortURL: "short-url",
      originalURL: "original-url",
    };
    const id = storage.saveURL(urlData);
    const retrievedUrl = storage.getURLById(id);
    expect(retrievedUrl).toEqual(urlData);
  });

  test("should increment click count for a URL", () => {
    const urlData = {
      id: null,
      shortURL: "short-url",
      originalURL: "original-url",
      clicks: 0,
    };
    const id = storage.saveURL(urlData);
    storage.incrementURLClickCount(id);
    const retrievedUrl = storage.getURLById(id);
    expect(retrievedUrl.clicks).toBe(1);
  });

  test("should retrieve all stored URLs", () => {
    storage.saveURL({
      id: null,
      shortURL: "url-1",
      originalURL: "original-url-1",
    });
    storage.saveURL({
      id: null,
      shortURL: "url-2",
      originalURL: "original-url-2",
    });
    const allURLs = storage.getAllURLs();
    expect(allURLs.length).toBe(2);
  });
});
