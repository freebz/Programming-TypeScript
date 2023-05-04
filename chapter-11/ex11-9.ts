// 11.4 서드 파티 자바스크립트 사용

// @ts-ignore
import Unsafe from 'untyped-module'

Unsafe  // any


// types.d.ts
declare module 'nearby-ferret-alerter'


// types.d.ts
declare module 'nearby-ferret-alerter' {
    export default function alert(loudness: 'quiet' | 'loud'): Promise<void>
    export function getFerretCount(): Promise<number>
}
