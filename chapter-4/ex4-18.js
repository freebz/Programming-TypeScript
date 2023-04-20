// 4.1.8 문맥적 타입화
function times(f, n) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}
times(function (n) { return console.log(n); }, 4);
function f(n) {
    console.log(n);
}
times(f, 4);
