class Cookie {
    constructor(flavor) {
        console.log("called", flavor);
      this.flavor = flavor;
    }
  
    showTitle() {
      console.log(`The flavor of this cookie is ${this.flavor}.`);
    }
  }

class FavoriteCookie extends Cookie {
    constructor ( type ) {
        super(type);
    }
    showTitle() {
      super.showTitle();
      console.log(`${this.flavor} is amazing.`);
    }
}

// let myCookie = new FavoriteCookie('chocolate');

function Person ( name ) {
	this.name = name;
	this.getName = function () {
		return this.name;
	}
}

Person.prototype.getFullName = function () {
	console.log("My full name is " + this.name);
}

function Employee ( eId ) {
	Person.call(this, "surya");
	this.id = eId;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.getEmployeeId = function () {
	console.log(this.id);
}

// const v = new Person("surya");
// console.log(v.getFullName());

const e = new Employee(123);
e.getEmployeeId();
e.getFullName();
  