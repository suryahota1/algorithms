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

// ES5 prototypal inheritance
function Person ( name ) {
    this.name = name;
}

Person.prototype.describe = function () {
    console.log(this.name);
}

function Employee ( name, title ) {
    Person.call(this, name);
    this.title = title;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.greet = function () {
    console.log("Hello " + this.title + this.name);
}

// Add readonly property to an object
const obj1 = {};
Object.defineProperty(obj1, "prop", {
    value: 45,
    writable: false
});

// Create an object with certain prototype
const parProto = {};
const newObj = Object.create(parProto, {
    name: {
        value: "Surya",
        writable: false
    },
    age: {
        value: 28,
        configurable: false,
        enumerable: false,
        writable: true
    }
});



// Inheriting own properties
function extend ( target, source ) {
    Object.getOwnPropertyNames(source).forEach(propName => {
        Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
    });
}

// Shim for Object.create
Object.create = Object.create ?? function ( proto ) {
    function Temp () {};
    Temp.prototype = proto;
    return new Temp();
}

// Inherit function

function inherits ( SubC, SuperC ) {
    const SubProto = Object.create(SuperC);
    extend(SubProto, SubC);
    SubC.prototype = SubProto;
    SubC.prototype.constructor = SubC;
}
