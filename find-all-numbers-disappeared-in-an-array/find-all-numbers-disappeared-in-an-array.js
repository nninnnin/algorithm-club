/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const cache = {};
    const result = [];
    
    nums.forEach(num => {
        cache[num] = true;
    });
    
    for (let i = 1; i <= nums.length; i++) {
        if (!cache[i]) result.push(i);
    }
    
    return result;
};