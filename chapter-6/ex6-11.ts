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
    badTier: 'prod'  // 에러 TS2345: '{baseURL: string badTier: string}' 타입의
                     // 인수는 'Options' 타입의 매개변수에 할당할 수 없음
})

new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
} as Options)


let badOptions = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'
}
new API(badOptions)

let options: Options = {
    baseURL: 'https://api.mysite.com',
    badTier: 'prod'  // 에러 TS2345: '{baseURL: string badTier: string}' 타입의
                     // 인수는 'Options' 타입의 매개변수에 할당할 수 없음
}
new API(options)
