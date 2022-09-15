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

// const e = new Employee(123);
// e.getEmployeeId();
// e.getFullName();

// Rotate matrix
// [[1, 2, 3, 4], [5, 6, 7, 8]]

// Answer: [[8, 7, 6, 5], [4, 3, 2, 1]]

function swap ( i, j, r, c, m ) {
	let x = m[i][j];
	m[i][j] = m[r - i][c - j];
	m[r - i][c - j] = x;
}

function rotate ( m ) {
	let r = m.length - 1;
	let c = m[0].length - 1;
	for ( let i = 0; i < Math.ceil(m.length / 2); i++ ) {
		for ( let j = 0; j <= c; j++ ) {
			swap(i, j, r, c, m);
		}
	}
	return m;
}

console.log(rotate([[1, 2, 3, 4], [5, 6, 7, 8]]));