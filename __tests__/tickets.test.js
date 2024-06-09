const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets.js");
const ticketsData = require("../data/tickets.js");

describe("getTicketByName", () => {
  it("should return the correct ticket object when a valid name is provided", () => {
    const name = "Adult Matinee";
    const expected = {
      id: "6ha0u__54",
      name: "Adult Matinee",
      priceInCents: 949,
    };
    const result = getTicketByName(ticketsData, name);
    expect(result).toEqual(expected);
  });

  it("should return null when an invalid name is provided", () => {
    const name = "Invalid Name";
    const result = getTicketByName(ticketsData, name);
    expect(result).toBeNull();
  });
});

describe("calculateTotalFromTicketNames", () => {
  it("should calculate the total price for a given array of ticket names", () => {
    const names = ["Adult Matinee", "Child Regular"];
    const expectedTotal = 949 + 1069;
    const result = calculateTotalFromTicketNames(ticketsData, names);
    expect(result).toBe(expectedTotal);
  });

  it("should return 0 if the array of names is empty", () => {
    const names = [];
    const result = calculateTotalFromTicketNames(ticketsData, names);
    expect(result).toBe(0);
  });

  it("should calculate the total price correctly even if some names do not exist", () => {
    const names = ["Adult Matinee", "Invalid Name"];
    const expectedTotal = 949; // Only valid name's price should be counted
    const result = calculateTotalFromTicketNames(ticketsData, names);
    expect(result).toBe(expectedTotal);
  });
});
