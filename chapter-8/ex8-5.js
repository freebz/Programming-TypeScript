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
