// 4.2.4 제네릭 타입 별칭
var myEvent = {
    target: document.querySelector('#myButton'),
    type: 'click'
};
function triggerEvent(event) {
    // ...
}
triggerEvent({
    target: document.querySelector('#myButton'),
    type: 'mouseover'
});
