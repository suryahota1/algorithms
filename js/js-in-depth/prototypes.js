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