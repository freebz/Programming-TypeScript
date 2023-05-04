"use strict";
// 10.1 가볍게 살펴보는 자바스크립트 모듈의 역사
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderBase = void 0;
window.emailListModule = {
    renderList: function () { }
    // ...
};
window.emailComposerModule = {
    renderComposer: function () { }
    // ...
};
window.appModule = {
    renderApp: function () {
        window.emailListModule.renderList();
        window.emailComposerModule.renderComposer();
    }
};
$LAB
    .script('/emailBaseModule.js').wait()
    .script('/emailListModule.js')
    .script('/emailComposerModule.js');
// emailBaseModule.js
var emailList = require('emailListModule');
var emailComposer = require('emailComposerModule');
module.exports.renderBase = function () {
    // ...
};
define('emailBaseModule', ['require', 'exports', 'emailListModule', 'emailComposerModule'], function (require, exports, emailListModule, emailComposerModule) { }[exports.renderBase = function () {
    // ...
}]);
function renderBase() {
    // ...
}
exports.renderBase = renderBase;
