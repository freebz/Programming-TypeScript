var c = {
    firstName: 'john',
    lastName: 'barrowman'
};
var Person = /** @class */ (function () {
    function Person(firstName, // public은 this.firstName = firstName을
    // 단축한 것
    lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
c = new Person('matt', 'smith'); // OK
