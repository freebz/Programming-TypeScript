// 4.2.6 제네릭 타입 기본값

type MyEvent<T> = {
    target: T
    type: string
}


let buttonEvent: MyEvent<HTMLButtonElement> = {
    target: myButton,
    type: string
}


type MyEvent<T extends HTMLElement = HTMLElement> = {
    target: T
    type: string
}


let myEvent: MyEvent = {
    target: myElement,
    type: string
}


// 좋음
type MyEvent2<
    Type extends string,
    Target extends HTMLElement = HTMLElement,
    > = {
	target: Target
	type: Type
    }

// 안 좋음
type MyEvent3<
    Target extends HTMLElement = HTMLElement,
    Type extends string  // 에러 TS2706: 필수 타입 매개변수는
                         // 선택적 타입 매개변수 뒤에 올 수 없음
    > = {
	target: Target
	type: Type
    }
