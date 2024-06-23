const { tickets } = require("../data/tickets");
const {
  getTicketByName,
  calculateTotalFromTicketNames,
} = require("../src/tickets");

describe("check getTicketByName()", () => {
  test("Returns the ticket name", () => {
    const expected = tickets[0];

    expect(getTicketByName(tickets, "Adult Matinee")).toBe(expected);
  });

  test("Returns null", () => {
    expect(getTicketByName(tickets, "Ray")).toBe(null);
  });
});

describe("calculateTotalFromTicketNames()", () => {
  it("should give the Total value of tickets", () => {
    const arrTest1 = [
      "adult matinee",
      "senior matinee",
      "mike",
      "Senior Regular",
    ];
    expect(calculateTotalFromTicketNames(tickets, arrTest1)).toBe(3007);
  });

  it("should calculate duplicate tickets", () => {
    const arrTest2 = [
      "Adult Matinee",
      "Senior Matinee",
      "Senior Matinee",
      "Adult Regular",
    ];
    expect(calculateTotalFromTicketNames(tickets, arrTest2)).toBe(3996);
  });
});
