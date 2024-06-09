const {
  getTicketByName,
  calculateTotalFromTicketNames
} = require('../src/tickets.js')

const tickets = require('../data/tickets.js')

describe("getTicketByName()", () => {
  it("should return the ticket object with the matching ID", () => {
    const name = tickets[0].name
    const actual = getTicketByName(tickets, name)
    const expected = tickets[0]
    expect(actual).toEqual(expected)
  })

  it("should return null if a ticket with matching name is not found", () => {
    const name = "NONE"
    const actual = getTicketByName(tickets, name)
    const expected = tickets[0]
    expect(actual).toEqual(null)
  })
})