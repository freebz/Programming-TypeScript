// 11.1.3 앰비언트 모듈 선언

declare module 'module-name' {
    export type MyType = number
    export type MyDefaultType = { a: string }
    export let myExport: MyType
    let myDefaultExport: MyDefaultType
    export default myDefaultExport
}



import ModuleName from 'module-name'
ModuleName.a  // string


declare module '@most/core' {
    // 타입 선언
}



// 임포트했을 때 any 타입이 되도록 선언
declare module 'unsafe-module-name'


import {x} from 'unsafe-module-name'
x // any


// 웹팩의 json 로더로 임포트한 JSON 파일의 타입 선언
declare module 'json!*' {
    let value: object
    export default value
}

// 웹팩의 스타일 로더로 임포트한 CSS 파일의 타입 선언
declare module '*.css' {
    let css: CSSRuleList
    export default css
}


import a from 'json!myFile'
a  // 객체

import b from './widget.css'
b  // CSSRuleList
