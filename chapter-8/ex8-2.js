"use strict";
// 8.2 콜백 사용하기
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// 아파치 서버의 접근 로그에서 데이터 읽기
fs.readFile('/var/log/apache2/access_log', { encoding: 'utf8' }, function (error, data) {
    if (error) {
        console.error('error reading!', error);
        return;
    }
    console.info('success reading!', data);
});
// 동시에 같은 접근 로그에 기록하기
fs.appendFile('/var/log/apache2/access_log', 'New access log entry', function (error) {
    if (error) {
        console.error('error writing!', error);
    }
});
async1(function (err1, res1) {
    if (res1) {
        async2(res1, function (err2, res2) {
            if (res2) {
                async3(res2, function (err3, res3) {
                    // ...
                });
            }
        });
    }
});
