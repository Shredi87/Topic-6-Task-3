/**
 * Split the string into two arrays.
 * @param {string} str 
 * @param {0 for odd or 1 for even} startPos 
 * @returns sorted arrays with odd/even letters
 */
function strToArr(str, startPos) {
  let arr = [];

  for (let i = startPos; i < str.length; i += 2) {
    arr.push(str[i]);
  }

  return arr.sort();
}


/**
 * Check string in identical
 * @param {string} strFirst 
 * @param {string} strSecond 
 * @returns boolean
 */
function isIdentical(strFirst, strSecond) {
  let arrFirstOdd = strToArr(strFirst, 0);
  let arrFirstEven = strToArr(strFirst, 1);
  let arrSecondOdd = strToArr(strSecond, 0);
  let arrSecondEven = strToArr(strSecond, 1);

  let isIdenticalOdd = (arrFirstOdd.length === arrSecondOdd.length && arrFirstOdd.every((value, index) => value === arrSecondOdd[index]));
  let isIdenticalEven = (arrFirstEven.length === arrSecondEven.length && arrFirstEven.every((value, index) => value === arrSecondEven[index]));

  return (isIdenticalOdd && isIdenticalEven);
}

isIdentical("azbycx", "cxbyqz");