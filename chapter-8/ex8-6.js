"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = /** @class */ (function () {
    function Promise(f) {
    }
    return Promise;
}());
var fs_1 = require("fs");
(0, fs_1.readFile)(path, function (error, result) {
    // ...
});
function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        (0, fs_1.readFile)(path, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
}
var a = // ...
 let, b = // ...
 let, c = // ...
 a()
    .then(b)
    .catch(function (e) { return c(); }) // b는 에러가 아니므로 a가 에러일 때 호출됨
    .then(function (result) { return console.info('Done', result); })
    .catch(function (e) { return console.error('Error', e); });
