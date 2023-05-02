// 8.1 자바스크립트의 이벤트 루프

setTimeout(() => console.info('A'), 1)
setTimeout(() => console.info('B'), 2)
console.info('C')
