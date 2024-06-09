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

