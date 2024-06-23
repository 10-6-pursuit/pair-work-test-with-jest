const {
  getConcessionByID,
  calculateTotalFromIDs,
} = require("../src/concessions");

const { concessions } = require("../data/concessions");

describe("check getConcessionById() to ensure it pulls the object", () => {
  it("should return the object", () => {
    const expectedCon = concessions[2];
    expect(getConcessionByID(concessions, "KzWBehRAD")).toEqual(expectedCon);
  });

  it("should return null", () => {
    expect(getConcessionByID(concessions, "Mike")).toEqual(null);
  });
});

describe("testing the calculateTotalFromIDs()", () => {
  it("should return the total priceInCents of all truthy concession items", () => {
    const testArray1 = ["0Qs9Yp2NL", "KzWBehRAD", "Mike", "NEHAsbTYk"];
    const testArray2 = ["Mike", "Gary", "Jeff", "NEHAsbTYk"];
    expect(calculateTotalFromIDs(concessions, testArray1)).toBe(2477);
  });

  it("should return the total priceInCents of only truthy concession items", () => {
    const testArray2 = ["Mike", "Gary", "Jeff", "NEHAsbTYk"];
    expect(calculateTotalFromIDs(concessions, testArray2)).toBe(749);
  });
});
