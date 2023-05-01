function x() {
    // ...
}
function y() {
    var a = x();
    if (a instanceof Error) {
        return a;
    }
    // a로 어떤 동작을 수행함
}
function z() {
    var a = y();
    if (a instanceof Error) {
        return a;
    }
    // a로 어떤 동작을 수행함
}
