// 10.3 네임스페이스
// Get.ts
var Network;
(function (Network) {
    function get(url) {
        // ...
    }
    Network.get = get;
})(Network || (Network = {}));
// App.ts
var App;
(function (App) {
    Network.get('https://api.github.com/repos/Microsoft/typescript');
})(App || (App = {}));
(function (Network) {
    var HTTP;
    (function (HTTP) {
        function get(url) {
            // ...
        }
        HTTP.get = get;
    })(HTTP = Network.HTTP || (Network.HTTP = {}));
    var TCP;
    (function (TCP) {
        listenOn(port, number);
        Connection;
        {
            // ...
        }
        // ...
    })(TCP = Network.TCP || (Network.TCP = {}));
})(Network || (Network = {}));
// HTTP.ts
(function (Network) {
    var HTTP;
    (function (HTTP) {
        function get(url) {
            // ...
        }
        HTTP.get = get;
    })(HTTP = Network.HTTP || (Network.HTTP = {}));
})(Network || (Network = {}));
// UDP.ts
(function (Network) {
    var UDP;
    (function (UDP) {
        function send(url, packets) {
            // ...
        }
        UDP.send = send;
    })(UDP = Network.UDP || (Network.UDP = {}));
})(Network || (Network = {}));
// MyApp.ts
Network.HTTP.get('http://url.com/dogs');
Network.UDP.send('http://url.com/cats', new Buffer(123));
// A.ts
var A;
(function (A) {
    var B;
    (function (B) {
        var C;
        (function (C) {
            C.d = 3;
        })(C = B.C || (B.C = {}));
    })(B = A.B || (A.B = {}));
})(A || (A = {}));
// MyApp.ts
var d = A.B.C.d;
var e = d * 3;
