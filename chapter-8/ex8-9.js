"use strict";
// 8.5 비동기 스트림
Object.defineProperty(exports, "__esModule", { value: true });
// 새로운 Redis 클라이언트 인스턴스 생성
var client = redis.createClient();
// 클라이언트가 방출하는 몇 가지 이벤트 리스닝
client.on('ready', function () { return console.info('Client is ready'); });
client.on('error', function (e) { return console.error('An error occurred!', e); });
client.on('reconnecting', function (params) { return console.info('Reconnecting...', params); });
