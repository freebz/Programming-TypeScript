// 4.1.1 선택적 매개변수와 기본 매개변수

function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'Not signed in')
}

log('Page loaded')                // "12:38:31 PM Page loaded
                                  // Not signed in" 출력
log('User signed in', 'da763be')  // "12:38:31 PM User signed
                                  // in da763be" 출력
