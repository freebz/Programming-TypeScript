// 5.7 다형성
var MyMap = /** @class */ (function () {
    function MyMap(initialKey, initialValue) {
        // ...
    }
    MyMap.prototype.get = function (key) {
        // ...
    };
    MyMap.prototype.set = function (key, value) {
        // ...
    };
    return MyMap;
}());
 > ;
MyMap < K | K1, V | V1 > {
// ...
};
of(k, K, v, V);
MyMap < K, V > {
// ...
};
