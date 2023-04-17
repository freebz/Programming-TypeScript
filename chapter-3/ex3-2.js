function squareOf(n) {
    return n * n;
}
squareOf(2); // 4로 평가
squareOf('z'); // 에러 TS2345: '"z"'라는 타입의 인수는
// 'number' 타입의 매개변수에 할당할 수 없음
