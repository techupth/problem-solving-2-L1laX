//Exercise 1: Roman to Integer
const romanToInt = function (s) {
  //Start coding here
  let arrStr = s.toUpperCase().split("");
  let checkStr = arrStr.map((str, i, arr) => {
    if (
      arr[i] === arr[i + 1] &&
      arr[i] === arr[i + 2] &&
      arr[i] === arr[i + 3]
    ) {
      return "Error";
    } else {
      return str;
    }
  });
  if (checkStr.includes("Error")) {
    return "WrongFormat";
  }

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
    } else {
      return "ERROR";
    }
  });
  if (arrNum.includes("ERROR")) {
    return "Wrong Format";
  } else {
    let arrValid = arrNum.map((crr, index, arry) => {
      if (arry[index] < arry[index + 1]) {
        if (
          arry[index] - arry[index + 1] === -4 ||
          arry[index] - arry[index + 1] === -9 ||
          arry[index] - arry[index + 1] === -40 ||
          arry[index] - arry[index + 1] === -90 ||
          arry[index] - arry[index + 1] === -400 ||
          arry[index] - arry[index + 1] === -900
        ) {
          return crr;
        } else {
          return "ERROR";
        }
      } else {
        return crr;
      }
    });
    if (arrValid.includes("ERROR")) {
      return "ERROR";
    } else {
      let result = arrValid.reduce((acc, crr, index, arr) => {
        if (arr[index] < arr[index + 1]) {
          return (acc -= crr);
        } else {
          return (acc += crr);
        }
      }, 0);
      return result;
    }
  }
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
const result4 = romanToInt("AIII");
console.log(result1);
