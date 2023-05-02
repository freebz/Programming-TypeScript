"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var SafeEmitter = /** @class */ (function () {
    function SafeEmitter() {
        this.emitter = new events_1.default;
    }
    SafeEmitter.prototype.emit = function (channel) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        return (_a = this.emitter).emit.apply(_a, __spreadArray([channel], data, false));
    };
    SafeEmitter.prototype.on = function (channel, listener) {
        return this.emitter.on(channel, listener);
    };
    return SafeEmitter;
}());
// 메인 스레드로부터 들어오는 이벤트를 리스닝
var commandEmitter = new SafeEmitter();
// 이벤트를 메인 스레드로 다시 방출
var eventEmitter = new SafeEmitter();
// 메인 스레드로부터 받은 명령을 타입 안전한
// 이벤트 방출기로 감쌈
onmessage = function (command) {
    return commandEmitter.emit.apply(commandEmitter, __spreadArray([command.data.type], command.data.data, false));
};
// 워커가 발생시킨 이벤트를 리스닝하면서 이름 메인 스레드로 전송
eventEmitter.on('receivedMessage', function (data) {
    return postMessage({ type: 'receivedMessage', data: data });
});
eventEmitter.on('createThread', function (data) {
    return postMessage({ type: 'createThread', data: data });
});
// 기타
// 메인 스레드가 보낸 sendMessageToThread 명령에 응답
commandEmitter.on('sendMessageToThread', function (threadID, message) {
    return console.log("OK, I will send a message to threadID ".concat(threadID));
});
// 이벤트를 메인 스레드로 다시 방출
eventEmitter.emit('createThread', 123, [456, 789]);
