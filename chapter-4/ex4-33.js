// 여러 제한을 적용한 한정된 다형성
function logPermimeter(s) {
    console.log(s.numberOfSides * s.sideLength);
    return s;
}
var square = { numberOfSides: 4, sideLength: 3 };
logPermimeter(square); // 정사각형 "12" 기록
