// 차별된 유니온 타입
function handle(event) {
    if (typeof event.value === 'string') {
        event.value; // string
        // ...
        return;
    }
    event.value; // [number, number]
}
