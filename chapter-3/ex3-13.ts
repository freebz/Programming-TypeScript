let c: {
    firstName: string
    lastName: string
} = {
    firstName: 'john',
    lastName: 'barrowman'
}

class Person {
    constructor (
	public firstName: string,  // public은 this.firstName = firstName을
                                   // 단축한 것
	public lastName: string
    ) { }
}
c = new Person('matt', 'smith')    // OK
