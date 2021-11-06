import Map from "../src/map.js";

describe("Initialize a Leaflet Map", () => {
  let leafletMap = Map;

  beforeEach(() => {
    leafletMap = Map;
  });

  /**
   * @jest-environment jsdom
   */
  it("returns a map function", () => {
    expect(typeof leafletMap === "function").toBe(true);
  });
});
