// 6.1.5 정제
// 지원하는 단위를 나열
var units = ['cm', 'px', '%'];
// 지원하는 단위 각각을 확인하고 일치하는 값이 없으면 null 반환
function parseUnit(value) {
    for (var i = 0; i < units.length; i++) {
        if (value.endsWith(units[i])) {
            return units[i];
        }
    }
    return null;
}
function parseWidth(width) {
    // width가 null이거나 undefined면 일찍 반환
    if (width == null) {
        return null;
    }
    // width가 숫자면 픽셀로 취급
    if (typeof width === 'number') {
        return { unit: 'px', value: width };
    }
    // width로부터 단위 파싱
    var unit = parseUnit(width);
    if (unit) {
        return { unit: unit, value: parseFloat(width) };
    }
    // 이 외의 경우엔 null 반환
    return null;
}
