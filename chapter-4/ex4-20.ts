type Reserve = {
    (from: Date, to: Date, destination: strinig): Reservation
    (from: Date, destination: string): Reservation
}

let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    // ...
}
