const { getTicketByName } = require("../src/tickets")
const tickets = require("../data/tickets")

describe("getTicketByName()", () => {
  test("get a ticket by the name", () => {
    expect(getTicketByName(tickets,"Adult Matinee")).toEqual({ id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 })
  })
  test("If name does not exist return  null", () => {
    expect(getTicketByName(tickets,"Matinee")).toBe(null)
  })
})