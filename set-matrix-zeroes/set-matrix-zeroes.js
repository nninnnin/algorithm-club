/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    const columnsToBeZero = {};
    
    // 첫번째 순회에서는 어떤 컬럼에 0들이 존재하는지 알아내고,
    // 만약 0이 존재하는 row라면 해당 row를 모두 0으로 변환시킨다
    matrix.forEach((row, rowIndex, matrix) => {
        const indicesOfZero = findAllOccurrencesOfElement(row, 0);
        
        if (indicesOfZero.length > 0) {
            matrix[rowIndex] = row.map(el => 0);
        }
        
        indicesOfZero.forEach(indexOfZero => {
            columnsToBeZero[indexOfZero] = true;
        });
    });
    
    // 두번째 순회에서는 첫번째에서 알아낸 컬럼들에 존재하는 element들을 0으로 변환시켜준다.
    matrix.forEach((row, rowIndex, matrix) => {
        row.map((el, index, row) => {
            if (columnsToBeZero[index]) {
                row[index] = 0;
            }
        })
    })
};

var findAllOccurrencesOfElement = function (arr, el) {
    const indices = [];
    let index = arr.indexOf(el);
    
    while (index !== -1) {
        indices.push(index);
        index = arr.indexOf(el, index + 1);
    }
    
    return indices;
}
