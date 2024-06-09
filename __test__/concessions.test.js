const {getConcessionByID,calculateTotalFromIDs} = require("../src/concessions");



const concession = require("../data/concessions")


describe("getConcessionByID()", () => {
  test("Should find concession by id", () => {
  expect(getConcessionByID(concession,"g9sZdG1hI")).toEqual({ id: "g9sZdG1hI", name: "Small Popcorn", priceInCents: 929 })
  })
  test("Concession should exist", () => {
   expect( getConcessionByID(concession,"g9sZG1hI")).toBe(null)
  })
})




describe("calculateTotalFromIDs()", () => {

it("input arrays should not be empty", () =>{
    expect(calculateTotalFromIDs(concession,"g9sZG1hI")).toBe(0)
    })

it("Should return the total price in concession array", () =>{
    expect(calculateTotalFromIDs(concession,["g9sZdG1hI","0Qs9Yp2NL","KzWBehRAD"])).toBe(2657)
    })
})