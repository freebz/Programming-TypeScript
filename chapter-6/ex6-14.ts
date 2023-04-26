type UserTextEvent = { value: string, target: HTMLInputElement }
type UserMouseEvent = { value: [number, number], target: HTMLElement }

type UserEvent = UserTextEvent | UserMouseEvent

function handle(event: UserEvent) {
    if (typeof event.value === 'string') {
	event.value   // string
	event.target  // HTMLInputElement | HTMLElement (!!!)
	// ...
	return
    }
    event.value   // [number, number]
    event.target  // HTMLInputElement | HTMLElement (!!!)
}
