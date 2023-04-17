var Language;
(function (Language) {
    Language[Language["English"] = 100] = "English";
    Language[Language["Spanish"] = 500] = "Spanish";
    Language[Language["Russian"] = 501] = "Russian"; // 타입스크립트가 500 다음 숫자인 501로 추론
})(Language || (Language = {}));
