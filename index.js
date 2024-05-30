/**
 * Make sumItems a function that sums all the numbers in an array. So if you input the array [1, 2, 3, 4, 5], the function will return 15. This will be your base case.
 * @param {*} array 
 */

function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (let i of array) {
    if (Array.isArray(i)) {
      sum += sumItems(i);
    } else {
      sum += i;
    }
  }
  return sum;
}

module.exports = sumItems;