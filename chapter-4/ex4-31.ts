// 4.2.4 제네릭 타입 별칭

type MyEvent<T> = {
    target: T
    type: string
}


type ButtonEvent = MyEvent<HTMLButtonElement>


let myEvent: Event<HTMLButtonElement | null> = {
    target: document.querySelector('#myButton'),
    type: 'click'
}


type TimedEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
}


function triggerEvent<T>(event: MyEvent<T>): void {
    // ...
}

triggerEvent({  // T는 Element | null
    target: document.querySelector('#myButton'),
    type: 'mouseover'
})
