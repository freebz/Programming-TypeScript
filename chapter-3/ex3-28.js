// 3.2.11 튜플
var a = [1];
// [이름, 성씨, 생년] 튜플
var b = ['malcolm', 'gladwell', 1963];
b = ['queen', 'elizabeth', 'ii', 1926]; // 에러 TS2322: 'string'은
// 'number' 타입에 할당할 수 없음
// 방향에 따라 다른 값을 갖는 기차 요금 배열
var trainFares = [
    [3.75],
    [8.25, 7.70],
    [10.50]
];
// 다음과 같음
var moreTrainFares = [
// ...
];
// 최소 한 개의 요소를 갖는 string 배열
var friends = ['Sara', 'Tali', 'Chloe', 'Claire'];
// 이형 배열
var list = [1, false, 'a', 'b', 'c'];
