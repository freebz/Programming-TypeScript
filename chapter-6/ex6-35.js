// 6.6.2 Nonnull 어서션
function closeDialog(dialog) {
    if (!dialog.id) {
        return;
    }
    setTimeout(function () {
        return removeFromDOM(dialog, document.getElementById(dialog.id) // 에러 TS2345:
        // 'string | undefined' 타입의 인수는
        // 'string' 타입의 매개변수에 할당할 수 없음
        );
    });
}
function removeFromDOM(dialog, element) {
    element.parentNode.removeChild(element); // 에러 TS2531: 객체가
    // 'null'일 수 없음
    delete dialog.id;
}
