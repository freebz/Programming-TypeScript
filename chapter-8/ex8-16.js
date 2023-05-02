"use strict";
// 8.6.2 NodeJS에서 자식 프로세스 이용하기
Object.defineProperty(exports, "__esModule", { value: true });
// MainThread.ts
var child_process_1 = require("child_process");
var child = (0, child_process_1.fork)('./ChildThread.js');
child.on('message', function (data) {
    return console.info('Child process sent a message', data);
});
child.send({ type: 'syn', data: [3] });
// ChildThread.ts
process.on('message', function (data) {
    return console.info('Parent process sent a message', data);
});
process.send({ type: 'ack', data: [3] });
