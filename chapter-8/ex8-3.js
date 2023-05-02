// 8.3 프로미스로 정상 회복하기
function appendAndReadPromise(path, data) {
    return appendPromise(path, data)
        .then(function () { return readPromise(path); })
        .catch(function (error) { return console.error(error); });
}
function appendAndRead(path, data, cb) {
    appendFile(path, data, function (error) {
        if (error) {
            return cb(error, null);
        }
        readFile(path, function (error, result) {
            if (error) {
                return cb(error, null);
            }
            cb(null, result);
        });
    });
}
