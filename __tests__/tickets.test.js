const { calculateTotalFromTicketNames, getTicketByName } = require("../src/tickets");
const data = require("../data/tickets");

describe("getTicketByName()", () => {
    

    test("should return an object that match the input name", () => {
        const actual = getTicketByName(data, "Senior Matinee");
        const expected = {
            id: "dlb8ka9N_", 
            name: "Senior Matinee", 
            priceInCents: 839 
        }

        expect(actual).toEqual(expected);
    });

    test("if there's no matches with the provided name returns 'null'", () => {

        const actual = getTicketByName(data, "Adult VIP");

        expect(actual).toEqual(null);
    });


});

describe("calculateTotalFromTicketNames()", () => {

    test("it should return a total of the sum from all prices of the provided name", () => {
        const actual = calculateTotalFromTicketNames(data, ["Child Regular", "Adult Regular"]);

        expect(actual).toEqual(2438);
    });

    test("if there's no matches with the provided name returns 0", () => {
        const actual = calculateTotalFromTicketNames(data, ["Child VIP", "Senior VIP"])
        
        expect(actual).toEqual(0);
    })
});