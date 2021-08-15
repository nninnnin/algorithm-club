/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stack = [];
    const stack2 = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    for (let j = 0; j < t.length; j++) {
        if (t[j] === "#") {
            stack2.pop();
        } else {
            stack2.push(t[j]);
        }
    }
    
    if (stack.length !== stack2.length) return false;
    
    for (let k = 0; k < stack.length; k++) {
        if (stack[k] !== stack2[k]) return false;
    }
    
    return true;
};