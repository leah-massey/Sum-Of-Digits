const digitalRoot = function (value) {
  let sum = 0; //17
  let sumArray;
  let valueArray = value.toString().split(""); //["2","4","5","6"]
  console.log(valueArray);

  // while (valueArray.length > 1) {
  valueArray.forEach((number) => {
    sum += +number;
  });
  console.log(valueArray.length);
  sumArray = sum.toString().split("");
  console.log(valueArray.length);

  while (sumArray.length > 1) {
    sum = 0;
    sumArray.forEach((number) => {
      sum += +number;
    });
    sumArray = sum.toString().split("");
  }

  return sum;
};

module.exports = digitalRoot;
