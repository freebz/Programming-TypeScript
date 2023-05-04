"use strict";
// 10.2 import, export
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.X = exports.result = exports.bar = exports.foo = void 0;
// a.ts
function foo() { }
exports.foo = foo;
function bar() { }
exports.bar = bar;
// b.ts
var a_1 = require("./a");
(0, a_1.foo)();
exports.result = (0, a_1.bar)();
// c.ts
function meow(loudness) { }
exports.default = meow;
// d.ts
var c_1 = require("./c"); // {중괄호}가 없다는 사실에 주의
(0, c_1.default)(11);
a.foo();
a.bar();
// f.ts
__exportStar(require("./a"), exports);
// g.ts
exports.X = 3;
// h.ts
var g_1 = require("./g");
var a = exports.X + 1; // X는 값 X를 가리킴
var b = { y: 'z' }; // X는 타입 X를 가리킴
