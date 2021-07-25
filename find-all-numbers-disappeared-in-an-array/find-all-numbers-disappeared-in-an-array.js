/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const cache = {};
    const result = [];
    
    // O(n)
    // 먼저 있는 숫자들을 해시테이블에 넣어준다
    nums.forEach(num => {
        cache[num] = true;
    });
    
    // O(n)
    // 1부터 순회하며 없는 숫자들을 result에 푸시해준다
    for (let i = 1; i <= nums.length; i++) {
        if (!cache[i]) result.push(i);
    }
    
    // 결과적으로 O(2n) 의 시간복잡도
    return result;
};