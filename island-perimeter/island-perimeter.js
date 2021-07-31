/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function (grid) {
  // 1의 갯수를 센다
  const numberOfGround = grid.reduce((numOfOneTotal, row) => {
    return (
      numOfOneTotal +
      row.reduce((numOfOneInRow, item) => {
        if (item === 1) {
          return numOfOneInRow + 1;
        }

        return numOfOneInRow;
      }, 0)
    );
  }, 0);

  // 붙어있는 면을 센다
  const numberOfAdjoinedSides = grid.reduce(
    (numsInTotal, row, rowIndex, grid) => {
      return (
        numsInTotal +
        row.reduce((numsInRow, item, index, row) => {
          if (!item) return numsInRow;

          // 왼쪽
          if (row[index - 1]) numsInRow += 1;
          // 오른쪽
          if (row[index + 1]) numsInRow += 1;
          // 위
          if (grid[rowIndex - 1] && grid[rowIndex - 1][index]) numsInRow += 1;
          // 아래
          if (grid[rowIndex + 1] && grid[rowIndex + 1][index]) numsInRow += 1;

          return numsInRow;
        }, 0)
      );
    },
    0
  );

  return numberOfGround * 4 - numberOfAdjoinedSides;
};
