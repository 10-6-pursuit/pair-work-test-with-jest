const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets.js")

describe("getTicketByName()", () => {
    test("should return object with matching name", () => {
      expect(getTicketByName([{name:"asdlfjaslf"},{name:"asdlkfj"}], "asdlkfj")).toEqual({name:"asdlkfj"});
    });
    test("should return object even if name has uppercase letters ", () => {
        expect(getTicketByName([{name:"asdlfjaslf"},{name:"asdslkfj"}], "Asdslkfj")).toEqual({name:"asdslkfj"});
    })
    test("should return null if array does not container object with matching name", () => {
        expect(getTicketByName([{name:"asdlfjaasdfslf"},{name:"asdslasdfkfj"}], "asdlkfj")).toEqual(null);
    })
    test("should return null if array is empty", () => {
        expect(getTicketByName([], "asdlkfj")).toEqual(null);
    })
  });

  describe("calculateTotalFromTicketNames()", () => {
    test("should return single value of concession object with matching name", () => {
      expect(calculateTotalFromTicketNames([
        { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
        { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
        { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
        { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
        { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
      ], ["Small Popcorn"])).toEqual(929);
    });
    test("should return the total value of concession objects with matching names", () => {
        expect(calculateTotalFromTicketNames([
          { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
          { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
          { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
          { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
          { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
        ], ["Small Popcorn", "Large Popcorn", "Small Soda", "Large Soda", "Candy"])).toEqual(3975);
      });
      test("should return 0 if there are no matching namess", () => {
        expect(calculateTotalFromTicketNames([
          { id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 },
          { id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 },
          { id: "KzWBehRAD", name: "Small Soda", priceInCents: 699 },
          { id: "NEHAsbTYk", name: "Large Soda", priceInCents: 749 },
          { id: "rNVCeVsri", name: "Candy", priceInCents: 569 },
        ], ["g9sZddG1hI", "0Qs9Yps2NL", "KzWBeehRAD", "NEHAqsbTYk", "rNVCeVsfri"])).toEqual(0);
      });
  });