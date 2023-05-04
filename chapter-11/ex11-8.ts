// 11.3 자바스크립트의 타입 검색

// index.ts
import './legacy/old-file'


// types.d.ts
declare module 'foo' {
    let bar: {}
    export default bar
}


// index.ts
import bar from 'foo'


// index.ts
import * as React from 'react'
