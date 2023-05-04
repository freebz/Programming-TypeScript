"use strict";
// 11.2.3 단계 2b: JSDoc 어노테이션 추가(선택 사항)
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPascalCase = void 0;
/**
 * @param word {string} 변환할 입력 문자열
 * @returns {string} 파스칼 표기법(pascal case)으로 변환된 문자열
 */
function toPascalCase(word) {
    return word.replace(/\w+/g, function (_a) {
        var a = _a[0], b = _a.slice(1);
        return a.toUpperCase() + b.join('').toLowerCase();
    });
}
exports.toPascalCase = toPascalCase;
