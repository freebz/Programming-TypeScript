function handle(event) {
    if (typeof event.value === 'string') {
        event.value; // string
        event.target; // HTMLInputElement | HTMLElement (!!!)
        // ...
        return;
    }
    event.value; // [number, number]
    event.target; // HTMLInputElement | HTMLElement (!!!)
}
