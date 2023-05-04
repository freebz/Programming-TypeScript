// 11.2.3 단계 2b: JSDoc 어노테이션 추가(선택 사항)

/**
 * @param word {string} 변환할 입력 문자열
 * @returns {string} 파스칼 표기법(pascal case)으로 변환된 문자열
 */
export function toPascalCase(word) {
    return word.replace(
	/\w+/g,
	([a, ...b]) => a.toUpperCase() + b.join('').toLowerCase()
    )
}
