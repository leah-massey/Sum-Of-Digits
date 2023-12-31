const digitalRoot = require("./digitalRoot");

describe("digitalRoot", () => {
  it("returns a single digit number if single digit inputted", () => {
    expect(digitalRoot(7)).toEqual(7);
  });

  it("returns the inputted number if single digit inputted", () => {
    expect(digitalRoot(5)).toEqual(5);
  });

  it("returns the sum of a double digit input", () => {
    expect(digitalRoot(24)).toEqual(6);
  });

  it("returns the sum of multiple when their sum is a single digit", () => {
    expect(digitalRoot(111)).toEqual(3);
  });

  it("continues to reduce the number by adding digits together until sum is a single digit", () => {
    expect(digitalRoot(493193)).toEqual(2);
  });

  it("returns an error if input not a number", () => {
    expect(() => digitalRoot("23")).toThrow("Argument must be in a number.");
  });
});
