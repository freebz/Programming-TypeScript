// 오버로드 시그니처는 구체적으로 유지하자

let reserve: Reserve = (
    from: any,
    toOrDestination: any,
    destination?: any
) => {
    // ...
}


function getMonth(date: any): number | undefined {
    if (date instanceof Date) {
	return date.getMonth()
    }
}


function getMonth(date: Date): number {
    return date.getMonth()
}
