// 11.2 자비스크립트를 타입스크립트로 천천히 마이그레이션 하기
// 11.2.1 단계 1: TSC 추가
// 11.2.2 단계 2a: 자바스크립트에 타입 확인 활성화(선택 사항)
var A = /** @class */ (function () {
    function A() {
        this.x = 0; // number | string | string[], 어떻게 사용하느냐에 의해 추론됨
    }
    A.prototype.method = function () {
        this.x = 'foo';
    };
    A.prototype.otherMethod = function () {
        this.x = ['array', 'of', 'strings'];
    };
    return A;
}());
