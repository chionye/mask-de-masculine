const InMemoryStorage = require("../../services/InMemoryStorage");

describe("InMemoryStorage", () => {
  let storage;

  beforeEach(() => {
    storage = new InMemoryStorage();
  });

  test("should save a URL and return a unique ID", () => {
    const id = storage.save({
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
    const id = storage.save(urlData);
    const retrievedUrl = storage.getById(id);
    expect(retrievedUrl).toEqual(urlData);
  });

  test("should increment click count for a URL", () => {
    const urlData = {
      id: null,
      shortURL: "short-url",
      originalURL: "original-url",
      clicks: 0,
    };
    const id = storage.save(urlData);
    storage.incrementClickCount(id);
    const retrievedUrl = storage.getById(id);
    expect(retrievedUrl.clicks).toBe(1);
  });

  test("should retrieve all stored URLs", () => {
    storage.save({
      id: null,
      shortURL: "url-1",
      originalURL: "original-url-1",
    });
    storage.save({
      id: null,
      shortURL: "url-2",
      originalURL: "original-url-2",
    });
    const allURLs = storage.getAll();
    expect(allURLs.length).toBe(2);
  });
});
