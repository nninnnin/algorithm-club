/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
      swap(start, end, s);

      start++;
      end--;
    }

    return s;
};

function swap (i1, i2, str) {
  const temp = str[i2];

  str[i2] = str[i1];
  str[i1] = temp;
}
