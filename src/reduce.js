//////////////////////
//reduce
//////////////////////

var numbers = [10, 20, 30];

var sum1 = 0;

for (var i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];
}

console.log(sum1);

var sum2 = numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

console.log(sum2);

///////////////////////////

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

var result = primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(result);

//////////////////////////////

function balancedParens(string) {
  return !string.split("").reduce(function (previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return previous + 1;
    }
    if (char === ")") {
      return previous - 1;
    }
  }, 0);
}
