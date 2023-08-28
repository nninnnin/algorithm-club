/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    const leftEl = Math.abs(nums[left]);
    const rightEl = Math.abs(nums[right]);

    if (leftEl >= rightEl) {
      result.unshift(Math.pow(leftEl, 2));
      left++;
    }

    if (leftEl < rightEl) {
      result.unshift(Math.pow(rightEl, 2));
      right--;
    }
  }

  return result;
};
