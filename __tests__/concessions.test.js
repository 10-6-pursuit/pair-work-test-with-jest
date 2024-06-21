const { calculateTotalFromIDs, getConcessionByID } = require("../src/concessions");
const  data  = require("../data/concessions");

describe("getConcessionByID()", () => {

    test("returns an object that match the input ID", () => {
        expect(getConcessionByID(data, "g9sZdG1hI")).toEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 })
    })

    test("if there's no matches with the provided ID returns 'null'", () => {
        expect(getConcessionByID(data, "helloworld")).toBe(null);
    })

});

describe("calculateTotalFromIDs()", () => {

    const input = ["0Qs9Yp2NL", "KzWBehRAD"]
    const actual = calculateTotalFromIDs(data, input);

    test("it should return a total of the sum from all prices of the provided IDs", () => {
        expect(actual).toEqual(1728);
    });
})