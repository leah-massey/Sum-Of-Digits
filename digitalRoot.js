const digitalRoot = function (value) {
  let sum = value;
  let valueArray = value.toString().split("");

  if (typeof value !== "number") {
    throw new Error("Argument must be in a number.");
  }

  while (valueArray.length > 1) {
    sum = 0;
    valueArray.forEach((number) => {
      sum += +number;
    });
    valueArray = sum.toString().split("");
  }

  return sum;
};

module.exports = digitalRoot;
