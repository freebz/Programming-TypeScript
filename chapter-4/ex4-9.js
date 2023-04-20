// 4.1.3 call, apply, bind
function add(a, b) {
    return a + b;
}
add(10, 20); // 30으로 평가
add.apply(null, [10, 20]); // 30으로 평가
add.call(null, 10, 20); // 30으로 평가
add.bind(null, 10, 20)(); // 30으로 평가
