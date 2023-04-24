// 5.9 데코레이터

@serializable
class APIPayload {
    getValue(): Payload {
	// ...
    }
}


let APIPayload = serializable(class APIPayload {
    getValue(): Payload {
	// ...
    }
})



type ClassConstructor<T> = new (...args: any[]) => T
function serializable<
    T extends ClassConstructor<{
	getValue(): Payload
    }>
>(Constructor: T) {
    return class extends Constructor {
	serialize() {
	    return this.getValue().toString()
	}
    }
}



let payload = new APIPayload
let serialized = payload.serialize()  // 에러 TS2339: 'serialize' 프로퍼티는
                                      // 'APIPayload' 타입에 존재하지 않음



let DecoratedAPIPayload = serializable(APIPayload)
let payload = new DecoratedAPIPayload
payload.serialize()  // string
