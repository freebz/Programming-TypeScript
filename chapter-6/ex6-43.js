"use strict";
// 6.8 프로토타입 안전하게 확장하기
Object.defineProperty(exports, "__esModule", { value: true });
// .zip 구현
Array.prototype.zip = function (list) {
    return this.map(function (v, k) {
        return tuple(v, list[k]);
    });
};
// {
//     * exclude *: [
// 	"./zip.ts"
//     ]
// }
require("./zip");
[1, 2, 3]
    .map(function (n) { return n * 2; }) // number[]
    .zip(['a', 'b', 'c']); // [number, string][]
// [
//     [2, 'a'],
//     [4, 'b'],
//     [6, 'c']
// ]
