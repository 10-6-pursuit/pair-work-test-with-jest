const { getTicketByName,calculateTotalFromTicketNames } = require("../src/tickets")
const tickets = require("../data/tickets")
describe("getTicketByName()", () => {
  test("get a ticket by the name", () => {
    expect(getTicketByName(tickets,"Adult Matinee")).toEqual({ id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 })
  })
  test("If name does not exist return  null", () => {
    expect(getTicketByName(tickets,"Matinee")).toBe(null)
  })
});

describe("calculateTotalFromTicketNames", () => {

    it("Should check if name exist", () =>{
        expect(calculateTotalFromTicketNames(tickets,"Adult")).toBe(0)
        })
    
    it("Should return the total price in tickets array", () =>{
        expect(calculateTotalFromTicketNames(tickets,["Adult Matinee","Senior Matinee","Child Matinee"])).toBe(2457)
        })
    })