// 차별된 유니온 타입

type UserTextEvent = { value: string }
type UserMouseEvent = { value: [number, number] }

type UserEvent = UserTextEvent | UserMouseEvent

function handle(event: UserEvent) {
    if (typeof event.value === 'string') {
	event.value  // string
	// ...
	return
    }
    event.value      // [number, number]
}
