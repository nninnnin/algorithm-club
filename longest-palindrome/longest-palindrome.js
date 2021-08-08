/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function(s) {
    let result = 0;
    
    const charCountList = [...s].reduce((result, char) => {
        if (result[char]) result[char] += 1; else result[char] = 1;
        
        return result;
    }, {});
    
    console.log(charCountList)
    
    for (let char in charCountList) {
        const charCount = charCountList[char];
        
        if (charCount % 2 === 0) {
            result += charCount;
            charCountList[char] = 0;
        } else {
            result += charCount - 1;
            charCountList[char] = 1;
        }
    }
    
    console.log(result);
    
    const charList = Object.keys(charCountList);
    
    for (let i = 0; i < charList.length; i++) {
        const charCount = charCountList[charList[i]];
        
        if (charCount === 1) {
            result += 1;
            break;
        }
    }
    
    return result;
};
