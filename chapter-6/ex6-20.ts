type APIResponse = {
    user: {
	userId: string
	friendList: {
	    count: number
	    friends: {
		firstName: string
		lastName: string
	    }[]
	}
    }
}


// keyof 연산자

type ResponseKeys = keyof APIResponse        // 'user'
type UserKeys = keyof APIResponse['user']    // 'userId' | 'friendList'
type FriendListKeys = keyof APIResponse['user']['friendList']
                                             // 'count' | 'friends'


function get<
    O extends object,
    K extends keyof O
>(
    o: O,
    k: K
): O[K] {
    return o[k]
}



type ActivityLog = {
    lastEvent: Date
    events: {
	id: string
	timestamp: Date
	type: 'Read' | 'Write'
    }[]
}

let activityLog: ActivityLog =                 // ...
let lastEvent = get(activityLog, 'lastEvent')  // Date



type Get = {
    <
	O extends object,
        K1 extends keyof O
    >(o: O, k1: K1): O[K1]
    <
	O extends object,
        K1 extends keyof O,
        K2 extends keyof O[K1],
        K3 extends keyof O[K1][K2]
    >(o: O, k1: K1, k2: K2, k3: K3): O[K1][K2][K3]
}

let get: Get = (object: any, ...keys: string[]) => {
    let result = object
    keys.forEach(k => result = result[k])
    return result
}

get(activityLog, 'events', 0, 'type')  // 'Read' | 'Write'
get(activityLog, 'bad')  // 에러 TS2345: 인수 '"bad"' 타입은 매개변수
                         // '"lastEvent" | "events"' 타입에 할당할 수 없음
