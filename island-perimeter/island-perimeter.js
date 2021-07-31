/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function(grid) {
    // 1의 갯수를 센다
    const numberOfGround = grid.reduce((numOfOneTotal, row) => {
        return numOfOneTotal + row.reduce((numOfOneInRow, item) => {
            if (item === 1) {
                return numOfOneInRow + 1;
            }
            
            return numOfOneInRow;
        }, 0);
    }, 0);
    
    // 붙어있는 면을 센다
    const numberOfAdjoinedSides = grid.reduce((numsInTotal, row, rowIndex, grid) => {
        return numsInTotal + row.reduce((numsInRow, item, index, row) => {
            console.log(item);
            if (!item) return numsInRow;
            
            // 왼쪽
            if (row[index - 1]) numsInRow += 1;
            console.log('1', numsInRow)
            // 오른쪽
            if (row[index + 1]) numsInRow += 1;
            console.log('2', numsInRow)
            // 위
            if (grid[rowIndex - 1] && grid[rowIndex - 1][index]) numsInRow += 1;
            console.log('3', numsInRow)
            // 아래
            if (grid[rowIndex + 1] && grid[rowIndex + 1][index]) numsInRow += 1;
            console.log('4', numsInRow)
            
            return numsInRow;
        }, 0);
    }, 0);
    
    console.log(numberOfAdjoinedSides)
    
    return numberOfGround * 4 - numberOfAdjoinedSides;
};