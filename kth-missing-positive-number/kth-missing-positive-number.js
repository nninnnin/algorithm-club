/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const largestNum = arr[arr.length - 1];

    const originalArr = new Array(largestNum).fill(null).map((_, index) => index + 1);
    
    if (originalArr.length == arr.length) {
        return largestNum + k;
    }
    
    const missingArr = originalArr.filter(el => !arr.includes(el));
    
    const lengthDifference = k - missingArr.length;
    
    if (lengthDifference <= 0) {
        return missingArr[k - 1];
    } else {
        return largestNum + lengthDifference;        
    }
};