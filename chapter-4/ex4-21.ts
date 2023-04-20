// 잘못됨!
type Reserve = {
    (from: Date, to: Date, destination: strinig): Reservation
    (from: Date, destination: string): Reservation
    (from: Date, toOrDestination: Date | string,
     destination?: string): Reservation
}


let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
	// 편도 여행 예약
    } else if (typeof toOrDestination === 'string') {
	// 왕복 여행 예약
    }
}
