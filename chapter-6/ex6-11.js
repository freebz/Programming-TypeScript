var API = /** @class */ (function () {
    function API(options) {
        this.options = options;
    }
    return API;
}());
new API({
    baseURL: 'https://api.mysite.com',
    tier: 'prod'
});
new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod' // 에러 TS2345: '{baseURL: string badTier: string}' 타입의
    // 인수는 'Options' 타입의 매개변수에 할당할 수 없음
});
new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
});
var badOptions = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
};
new API(badOptions);
var options = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod' // 에러 TS2345: '{baseURL: string badTier: string}' 타입의
    // 인수는 'Options' 타입의 매개변수에 할당할 수 없음
};
new API(options);
