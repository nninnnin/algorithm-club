 var findKthPositive = function(arr, k) {
  const largestNum = arr[arr.length - 1];

  for (let i = 1; i < largestNum; i++) {
      if (!arr.includes(i)) k--;

      if (k === 0) return i;
  }

  return largestNum + k;
};
