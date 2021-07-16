var divisorGame = function (N) {
  const DP = [];
  DP[1] = false;

  function checkGameResult (num) {
    let result = false;

    if (DP[num] !== undefined) {
      console.log(`DP for ${num} = ${DP[num]} has used!`);
      return DP[num];
    }

    const selectedNumbers = selectNumbers(num);

    for (let i = 0; i < selectedNumbers.length; i++) {
      result = result || !checkGameResult(num - selectedNumbers[i]);

      DP[num] = result;
    }

    return result;
  }

  function selectNumbers (N) {
    const selected = [];

    for (let num = 1; num < N; num++) {
      if (N % num === 0) {
        selected.push(num);
      }
    }

    return selected;
  }

  return checkGameResult(N);
};
