const digitalRoot = function (value) {
  let sum = 0;
  valueArray = value.toString().split("");

  valueArray.forEach((number) => {
    sum += +number;
  });
  return sum;
};

module.exports = digitalRoot;
