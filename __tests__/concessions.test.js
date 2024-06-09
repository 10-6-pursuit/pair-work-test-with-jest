const { getConcessionByID, calculateTotalFromIDs } = require("../src/concessions.js")

describe("getConcessionByID()", () => {
    test("should return object with matching ID", () => {
      expect(getConcessionByID([{id:"asdlfjaslf"},{id:"asdlkfj"}], "asdlkfj")).toEqual({id:"asdlkfj"});
    });
    test("should return null if no object is found", () => {
        expect(getConcessionByID([{id:"asdlfjaslf"},{id:"asdslkfj"}], "asdlkfj")).toEqual(null);
    })
    test("should return null if array is empty", () => {
        expect(getConcessionByID([], "asdlkfj")).toEqual(null);
    })
  });

  describe("calculateTotalFromIDs()", () => {
    test("should return single value of concession object with matching ID", () => {
      expect(calculateTotalFromIDs([
        { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
        { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
        { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
        { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
        { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
      ], ["g9sZdG1hI"])).toEqual(929);
    });
    test("should return the total value of concession objects with matching IDs", () => {
        expect(calculateTotalFromIDs([
          { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
          { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
          { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
          { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
          { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
        ], ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD", "NEHAsbTYk", "rNVCeVsri"])).toEqual(3975);
      });
      test("should return 0 if there are no matching IDs", () => {
        expect(calculateTotalFromIDs([
          { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
          { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
          { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
          { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
          { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
        ], ["g9sZddG1hI", "0Qs9Yps2NL", "KzWBeehRAD", "NEHAqsbTYk", "rNVCeVsfri"])).toEqual(0);
      });
  });

  