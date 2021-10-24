/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const arr = nums.map(num => Number(num * num));
  
  console.log(arr);
  
  // sort in non-decreasing order..
  return arr.sort((a, b) => {
    if (a - b > 0) return 1;
    if (a === b) return 0;
    if (a - b < 0) return -1;
  });
};