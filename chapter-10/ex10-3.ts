// 10.2.1 동적 임포트

let locale = await import('local_us-en')


import { locale } from './locales/locale-us'

async function main() {
    let userLocale = awiat getUserLocale()
    let path = `./locales/locale-${ userLocale }`
    let localeUS: typeof locale = await import(path)
}
