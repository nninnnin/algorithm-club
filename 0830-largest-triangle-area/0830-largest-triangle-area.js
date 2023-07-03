/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let result = 0;

    for (let i = 0; i in points; i++) {
        for (let j = i + 1; j in points; j++) {
            for (let k = j + 1; k in points; k++) {
                result = Math.max(getArea(
                    points[i],
                    points[j],
                    points[k]
                ), result);
            }
        }
    }

    return result;
};

function getArea (a, b, c) {
    const [x1, y1] = a;
    const [x2, y2] = b;
    const [x3, y3] = c;

    return Math.abs(((x1 * y2) + (x2 * y3) + (x3 * y1)) - ((x2 * y1) + (x3 * y2) + (x1 * y3))) / 2;
}
