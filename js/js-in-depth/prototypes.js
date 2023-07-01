function Human ( firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = new Human("Surya", "Hota");
const person2 = new Human("Sashi", "Hota");

console.log(person1);

// Create a factory function for object creation with a certain prototype
const PersonPrototype = {
    describe() {
        return this.name
    }
};

function createPerson ( name ) {
    return Object.create(PersonPrototype, {
        name: {
            value: name,
            enumerable: true,
            configurable: true,
            writable: false
        }
    });
}

const pObj = createPerson("Surya");
pObj.name = "Hello";
console.log(pObj.name);