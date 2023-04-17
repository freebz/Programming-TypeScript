// 유니온과 인터섹션 타입
// Cat
var a = {
    name: 'Bonkers',
    purrs: true
};
// Dog
a = {
    name: 'Domino',
    barks: true,
    wags: true
};
// 둘 다
a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
};
var b = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
};
function trueOrNull(isTrue) {
    if (isTrue) {
        return 'true';
    }
    return null;
}
function (a, b) {
    return a || b;
}
