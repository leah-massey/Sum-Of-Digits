const digitalRoot = require("./digitalRoot");

describe("digitalRoot", () => {
  it("returns a single digit number if single dugit inputted", () => {
    expect(digitalRoot(7)).toEqual(7);
  });
});
