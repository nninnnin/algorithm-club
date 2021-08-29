/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

// an image is represented
// by an m x n integer grid image

var floodFill = function(image, sr, sc, newColor) {
    const originalPixelColor = image[sr][sc];
    
    image[sr][sc] = newColor;
    
    checkPixels(image, sr, sc, newColor);
    
    function checkPixels (image, rowIndex, colIndex, newColor) {
        checkPixel(rowIndex - 1, colIndex);
        checkPixel(rowIndex + 1, colIndex);
        checkPixel(rowIndex, colIndex - 1);
        checkPixel(rowIndex, colIndex + 1);
        
        function checkPixel (rowIndex, colIndex) {
            const pixelColor = image[rowIndex] && image[rowIndex][colIndex];
            
            if ((pixelColor === originalPixelColor) && pixelColor !== newColor) {
                image[rowIndex][colIndex] = newColor;
                checkPixels(image, rowIndex, colIndex, newColor);
            }
        }
    }
    
    return image;
};