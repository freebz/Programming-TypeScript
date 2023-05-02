// 8.1 자바스크립트의 이벤트 루프
setTimeout(function () { return console.info('A'); }, 1);
setTimeout(function () { return console.info('B'); }, 2);
console.info('C');
