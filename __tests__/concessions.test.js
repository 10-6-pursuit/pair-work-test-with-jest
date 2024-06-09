const {
  getConcessionByID,
  calculateTotalFromIDs
} = require('../src/concessions.js')

const concessions = require('../data/concessions.js')

describe("getConcessionByID()", () => {
  it("should return a concession object with a matching ID", () => {
    const id = concessions[0].id
    const actual = getConcessionByID(concessions, id)
    const expected = concessions[0]
    expect(actual).toEqual(expected)
  })

  it("should return null if no object with matching ID is found", () => {
    const id = "NONE"
    const actual = getConcessionByID(concessions, id)
    const expected = null
    expect(actual).toBe(expected)
  })
})

describe("calculateTotalFromIDs()", () => {
  it("should calculate the total price of a list of concession IDs", () => {
    const ids = [concessions[0].id, concessions[1].id]
    const actual = calculateTotalFromIDs(concessions, ids)
    const expected = concessions[0].priceInCents + concessions[1].priceInCents
    expect(actual).toBe(expected)
  })

  it("should calculate the total price of valid IDs on list when there are invalid ID on the list", () => {
    const ids = [concessions[0].id, concessions[1].id, "NONE"]
    const actual = calculateTotalFromIDs(concessions, ids)
    const expected = concessions[0].priceInCents + concessions[1].priceInCents
    expect(actual).toBe(expected)
  })

  it("should return 0 if all the IDs on the list are invalid", () => {
    const ids = ["NOPE", "INCORRECT", "NONE"]
    const actual = calculateTotalFromIDs(concessions, ids)
    const expected = 0
    expect(actual).toBe(expected)
  })

  it("should return 0 if list of IDs is empty", () => {
    expect(calculateTotalFromIDs(concessions, [])).toBe(0)
  })


})
