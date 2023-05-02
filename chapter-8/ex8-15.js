// 타입 안전 프로토콜
function createProtocol(script) {
    return function (command) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new Promise(function (resolve, reject) {
                var worker = new Worker(script);
                worker.onerror = reject;
                worker.onmessage = function (event) { return resolve(event.data.data); };
                worker.postMessage({ command: command, args: args });
            });
        };
    };
}
var runWithMatrixProtocol = createProtocol('MatrixWorkerScript.js');
var parallelDeterminant = runWithMatrixProtocol('determiant');
parallelDeterminant([[1, 2], [3, 4]]);
then(function (determiant) {
    return console.log(determiant);
} // -2
);
