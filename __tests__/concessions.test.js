const { calculateTotalFromIDs, getConcessionByID } = require("../src/concessions");
const  data  = require("../data/concessions");

describe("getConcessionByID()", () => {

    test("should return an object that match the input ID", () => {
        expect(getConcessionByID(data, "g9sZdG1hI")).toEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 })
    })

    test("if there's no matches with the provided ID returns 'null'", () => {
        expect(getConcessionByID(data, "helloworld")).toBe(null);
    })

});

describe("calculateTotalFromIDs()", () => {

    test("it should return a total of the sum from all prices of the provided IDs", () => {

        const input = ["0Qs9Yp2NL", "KzWBehRAD"]
        const actual = calculateTotalFromIDs(data, input);

        expect(actual).toEqual(1728);
    });
    
    test("if there's no matches with the provided ID returns 0 ", () => {

        const input = ["0Qs9Yp2N", "KzWBehRA"]
        const actual = calculateTotalFromIDs(data, input);

        expect(actual).toEqual(0)
    })
})