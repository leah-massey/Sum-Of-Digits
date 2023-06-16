const digitalRoot = require("./digitalRoot");

describe("digitalRoot", () => {
  it("returns a single digit number if single digit inputted", () => {
    expect(digitalRoot(7)).toEqual(7);
  });

  it("returns the inputted number if single digit inputted", () => {
    expect(digitalRoot(5)).toEqual(5);
  });
});
