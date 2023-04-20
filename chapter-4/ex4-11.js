function fancyDate() {
    return "".concat(this.getDate(), "/").concat(this.getMonth(), "/").concat(this.getFullYear());
}
fancyDate.call(new Date); // "6/13/2008"으로 평가함
fancyDate(); // 에러 TS2684: void 타입의 'this'를 메서드에 속한
// 'Date' 타입의 'this'에 할당할 수 없음
