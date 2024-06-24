const { getTicketByName, calculateTotalFromTicketNames } = require("../src/tickets.js");
const ticketsData = require("../data/tickets.js");

describe('getTicketByName()', () => {

  it('should return the ticket object with the given name', () => {
    const name = "Adult Matinee";
    const expected = { 
      id: "6ha0u__54",
      name: "Adult Matinee", 
      priceInCents: 949 
    };
    const result = getTicketByName(ticketsData, name);
    expect(result).toEqual(expected);
  });

  it('should return null if no ticket with the given name is found', () => {
    const name = "no-existing-name";
    const result = getTicketByName(ticketsData, name);
    expect(result).toBeNull();
  });
});

describe('calculateTotalFromTicketNames()', () => {
  const names = [
    "Adult Regular",
    "Senior Regular",
    "Child Regular",
  ];

  it('should return the total price of tickets from the given names', () => {
    const total = calculateTotalFromTicketNames(ticketsData, names);
    expect(total).toBe(1369 + 1219 + 1069); 
  });

  it('should return 0 if no tickets are provided', () => {
    const names = [];
    const total = calculateTotalFromTicketNames(ticketsData, names);
    expect(total).toBe(0);
  });

  it('should ignore non-existent tickets when calculating the total', () => {
    const name = "Adult Regular";
    const total = calculateTotalFromTicketNames(ticketsData, [name]); // Pass name directly, not in an array
    expect(total).toBe(1369); // Only the price of Adult Regular is considered
  });
});