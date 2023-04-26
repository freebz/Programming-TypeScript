function handle(event) {
    if (event.type === 'TextEvent') {
        event.value; // string
        event.target; //HTMLInputElement
        // ...
        return;
    }
    event.value; // [number, number]
    event.target; // HTMLElement
}
