/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const majorityStandard = nums.length / 2;
  
  const numCount = nums.reduce((numCount, num) => {
    if (!numCount[num]) {
      numCount[num] = 1;
    } else {
      numCount[num]++;
    }
    
    return numCount;
  }, {});
  
  for (const [num, count] of Object.entries(numCount)) {
    if (count >= majorityStandard)  {
      return Number(num);
    }
  }
};