// 4.1.4 this의 타입

let x = {
    a() {
	return this
    }
}
x.a()  // a()의 바디 안에서 this는 객체 x임


let a = x.a
a()  // 이제 a()의 바디 안에서 this는 정의되지 않은 상태임



function fancyDate() {
    return `${ this.getDate() }/${ this.getMonth() }/${ this.getFullYear() }`
}


fancyDate.call(new Date)  // "4/14/2005"로 평가


fancyDate()  // 처리되지 않은 TypeError: this.getDate는 함수가 아님
