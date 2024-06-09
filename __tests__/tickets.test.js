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

describe("calculateTotalFromTicketNames()", () => {
  it("should return the total price of tickets of names on the list when all names are valid", () => {
    const names = [tickets[0].name, tickets[1].name]
    const actual = calculateTotalFromTicketNames(tickets, names)
    const expected = tickets[0].priceInCents + tickets[1].priceInCents
    expect(actual).toBe(expected)
  })

  it("should return the total price of tickets matching valid names on the list when there are invalid names on the list", () => {
    const names = [tickets[0].name, tickets[1].name, "NONE"]
    const actual = calculateTotalFromTicketNames(tickets, names)
    const expected = tickets[0].priceInCents + tickets[1].priceInCents
    expect(actual).toBe(expected)
  })

  it("should return 0 if all names on the list are invalid", () => {
    const names = ["NOPE", "INCORRECT", "NONE"]
    const actual = calculateTotalFromTicketNames(tickets, names)
    const expected = 0
    expect(actual).toBe(expected)
  })

  it("should return 0 if the names list is empty", () => {
    expect(calculateTotalFromTicketNames(tickets, [])).toBe(0)
  })
})