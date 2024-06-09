const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions.js");
const concessionsData = require("../data/concessions.js");

describe("getConcessionByID", () => {
  it("should return the correct concession object when a valid ID is provided", () => {
    const id = "g9sZdG1hI";
    const expected = {
      id: "g9sZdG1hI",
      name: "Small Popcorn",
      priceInCents: 929,
    };
    const result = getConcessionByID(concessionsData, id);
    expect(result).toEqual(expected);
  });

  it("should return null when an invalid ID is provided", () => {
    const id = "invalidID";
    const result = getConcessionByID(concessionsData, id);
    expect(result).toBeNull();
  });
});

describe("calculateTotalFromIDs", () => {
  it("should calculate the total price for a given array of concession IDs", () => {
    const ids = ["g9sZdG1hI", "0Qs9Yp2NL"];
    const expectedTotal = 929 + 1029;
    const result = calculateTotalFromIDs(concessionsData, ids);
    expect(result).toBe(expectedTotal);
  });

  it("should return 0 if the array of IDs is empty", () => {
    const ids = [];
    const result = calculateTotalFromIDs(concessionsData, ids);
    expect(result).toBe(0);
  });

  it("should calculate the total price correctly even if some IDs do not exist", () => {
    const ids = ["g9sZdG1hI", "invalidID"];
    const expectedTotal = 929; // Only valid ID's price should be counted
    const result = calculateTotalFromIDs(concessionsData, ids);
    expect(result).toBe(expectedTotal);
  });
});
