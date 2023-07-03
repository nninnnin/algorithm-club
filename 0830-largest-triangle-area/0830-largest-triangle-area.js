/**
 * @param {number[][]} points
 * @return {number}
 */

/**

    리뷰
    
    30분 내로 풀지 못했다.

    1) 평면 위에서의 삼각형의 너비를 구하는 방법을 알지 못했다. 실제 상황이었다면 빠르게 검색하거나 도움을 구했어야 맞다.
    만일 빠르게 찾았더라면 해결했을 것 같다. 로직을 짜는 것이 문제가 아니라 '이건 내가 모르는 내용이다' 싶을 때에는 그냥 찾아보자.

    2) 브루트포스에 대한 생각이 전혀 없었다. 어떻게 가장 큰 너비를 구하지? - 브루트포스를 가장 먼저 떠올릴 수 있겠다. '가장 ~한'!

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
