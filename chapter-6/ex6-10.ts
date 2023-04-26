// 초과 프로퍼티 확인

type Options = {
    baseURL: string
    cacheSize?: number
    tier?: 'prod' | 'dev'
}

class API {
    constructor(private options: Options) { }
}

new API({
    baseURL: 'https://api.mysite.com',
    tier: 'prod'
})


new API({
    baseURL: 'https://api.mysite.com',
    tierr: 'prod'
    // 에러 TS2345: 인수 '{tierr: string}' 타입은
    // 파라미터 타입 'Options'에 할당할 수 없음
    // 객체 리터럴은 알려진 프로퍼티만 지정할 수 있는데
    // 'tierr'라는 프로퍼티는 'Options'에 존재하지 않음
    // 혹시 'tier'를 착각했는가?
})
