// 9.1 프론트엔드 프레임워크
// 전역 window 객체에서 프로퍼티 읽기
var model = {
    url: window.location.href
};
// <input /> 요소 만들기
var input = document.createElement('input');
// <input /> 요소 만들기
input.classList.add('Input', 'URLInput');
// 사용자가 내용을 입력하면 모델 갱신
input.addEventListener('change', function () {
    return model.url = input.value.toUpperCase();
});
// <input />을 DOM에 주입
document.body.appendChild(input);
document.querySelector('.Element').innerHTML; // 에러 TS2531: 객체가
// 'null'일 수 없음
