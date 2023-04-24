// 5.8 믹스인

class User {
    // ...
}
User.debug()  // 'User({"id", 3, "name": "Emma Gluzman"})'로 평가



type ClassConsturctor = new (...args: any[]) => {}

function withEZDebug<C extends ClassConsturctor>(Class: C) {
    return class extends Class {
	constructor(...args: any[]) {
	    super(...args)
	}
    }
}



type ClassConsturctor = new (...args: any[]) => {}

function withEZDebug<C extends ClassConsturctor>(Class: C) {
    return class extends Class {
	debug() {
	    let Name = this.constructor.name
	    let value = this.getDebugValue()
	    return Name + '(' + JSON.stringify(value) + ')'
	}
    }
}



type ClassConsturctor<T> = new (...args: any[]) => T

function withEZDebug<C extends ClassConsturctor<{
    getDebugValue(): object
}>>(Class: C) {
    // ...
}



class HardToDebugUser {
    constructor(
	private id: number,
	private firstName: string,
	private lastName: string
    ) { }
    getDebugValue() {
	return {
	    id: this.id
	    name: this.firstName + ' ' + this.lastName
	}
    }
}

let User = withEZDebug(HardToDebugUser)
let user = new User(3, 'Emma', 'Gluzman')
user.debug()  // 'HardToDebugUser({"id": 3, "name": "Emma Gluzman"})'로 평가
