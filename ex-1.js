//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  let arrStr = s.split("");
  let arrNum = arrStr.map((str) => {
    if (str === "I") {
      return 1;
    } else if (str === "V") {
      return 5;
    } else if (str === "X") {
      return 10;
    } else if (str === "L") {
      return 50;
    } else if (str === "C") {
      return 100;
    } else if (str === "D") {
      return 500;
    } else if (str === "M") {
      return 1000;
    }
  });
  let result = arrNum.reduce((acc, crr, index, arr) => {
    if (arr[index] < arr[index + 1]) {
      return (acc -= crr);
    } else {
      return (acc += crr);
    }
  }, 0);
  console.log(arrStr);
  console.log(arrNum);
  console.log(result);
  return result;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
