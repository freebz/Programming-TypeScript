var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var commandEmitter = new SafeEmitter();
var eventEmitter = new SafeEmitter();
var worker = new Worker('WorkerScript.js');
// 워커로 들어오는 이벤트를 리스닝하여,
// 타입 안전한 이벤트 방출기로 다시 방출
worker.onmessage = function (event) {
    return eventEmitter.emit.apply(eventEmitter, __spreadArray([event.data.type], event.data.data, false));
};
// 이 스레드가 발행하는 명령을 리스닝하여 워커로 전송
commandEmitter.on('sendMessageToThread', function (data) {
    return worker.postMessage({ type: 'sendMessageToThread', data: data });
});
commandEmitter.on('createThread', function (data) {
    return worker.postMessage({ type: 'createThread', data: data });
});
// 기타
// 새 스레드가 생성되었음을 워커가 알려주면 작업을 수행
eventEmitter.on('createThread', function (threadID, participants) {
    return console.log('Created a new thread!', threadID, participants);
});
// 명령을 워커로 전송
commandEmitter.emit('createThread', [123, 456]);
