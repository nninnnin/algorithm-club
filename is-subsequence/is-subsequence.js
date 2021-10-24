/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let result = true;
  
  const sArr = Array.from(s);
  const tArr = Array.from(t);
  
  for (let i = 0; i < sArr.length; i++) {
    let isCharacterFound = false;
    let lastIndex = 0;
    
    for (let j = lastIndex ? lastIndex + 1 : 0; j < tArr.length; j++) {
      if (sArr[i] === tArr[j]) {
        isCharacterFound = true;
        lastIndex = j;
        tArr[j] = null; 

        break;
      }
      
      tArr[j] = null; 
    }
    
    console.log(tArr);
    
    if (!isCharacterFound) {
      result = false;
    }
  }
  
  return result;
};