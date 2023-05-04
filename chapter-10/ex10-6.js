// 10.3.1 충돌
// HTTP.ts
var Network;
(function (Network) {
    function request(url) {
        // ...
    }
    Network.request = request;
})(Network || (Network = {}));
// HTTP2.ts
(function (Network) {
    // 에러 TS2393: 중복된 함수 구현
    function request(url) {
        // ...
    }
    Network.request = request;
})(Network || (Network = {}));
// HTTP.ts
(function (Network) {
})(Network || (Network = {}));
// HTTP2.ts
(function (Network) {
})(Network || (Network = {}));
// HTTPS.ts
(function (Network) {
})(Network || (Network = {}));
