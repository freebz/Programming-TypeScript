var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MessageQueue = /** @class */ (function () {
    function MessageQueue(messages) {
        this.messages = messages;
    }
    MessageQueue.create = function (messages) {
        return new MessageQueue(messages);
    };
    return MessageQueue;
}());
var BadQueue = /** @class */ (function (_super) {
    __extends(BadQueue, _super);
    function BadQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadQueue;
}(MessageQueue)); // 에러 TS2675: 'MessageQueue'
// 클래스를 확장할 수 없음
// 클래스 생성자가 private으로 설정됨
MessageQueue.create([]); // MessageQueue
