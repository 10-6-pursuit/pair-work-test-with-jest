const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions");
const concessionsData = require("../data/concessions.js");

describe('getConcessionByID()', () => {
  it('should return the concession object with the matching ID', () => {
    const id = "NEHAsbTYk";
    const actual = getConcessionByID(concessionsData, id);
    const expected = { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749  };
    expect(actual).toEqual(expected);
  });

  it('should return null if no concession object is found with the given ID', () => {
    const id = "non-existing-id";
    const actual = getConcessionByID(concessionsData, id);
    expect(actual).toBeNull();
  });
});

describe('calculateTotalFromIDs()', () => {
  it('should return the total value of concessions from the given IDs', () => {
    const ids = ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD" ];
    const actual = calculateTotalFromIDs(concessionsData, ids);
    const expected = 929 + 1029 + 699; 
    expect(actual).toBe(expected);
  });

  it('should return 0 if no concessions are found from the given IDs', () => {
    const ids = [];
    const actual = calculateTotalFromIDs(concessionsData, ids);
    expect(actual).toBe(0);
  });
});
