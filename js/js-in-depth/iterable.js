// Iterable
const iterable = {
	[Symbol.iterator]: () => {
		let step = 5;
		return {
			next () {
				if ( --step < 0 ) {
					return { value: undefined, done: true };
				} else {
					return { value: step, done: false};
				}
			}
		}
	} 
}

// for ( const k of iterable ) {
// 	console.log(k);
// }


function iterateOver ( ...rest ) {
	let idx = 0;
	return {
		[Symbol.iterator] () {
			return {
				next () {
					if ( idx < rest.length ) return { value: rest[idx++] };
					else return { done: true };
				}
			}
		}
	}
}























const iterable4 = {
	i: 0,
	[Symbol.iterator]() {
		return this;
	},
	next() {
		return {
			value: this.i++
		}
	}
}

for ( const key of iterable4 ) {
	console.log("key", key);
}

// for ( const x of iterateOver("hello", 2, 3, 4, 5)) {
// 	console.log(x);
// }

// Iterators that are iterable
const iterable1 = {
	step: 4,
	[Symbol.iterator] () {
		return this;
	},
	next () {
		if ( this.step < 0 ) return { done: true };
		else return { value: this.step-- };
	}
}

// for ( const k of iterable1 ) {
// 	console.log(k);
// }

// Return iterables

function objectEntries ( obj ) {
	const keys = Reflect.ownKeys(obj);
	let idx = 0;
	return {
		[Symbol.iterator] () {
			return this;
		},
		next () {
			if ( idx < keys.length ) return { value: obj[keys[idx++]] };
			else return { done: true };
		}
	}
}

// for ( const k of objectEntries({ a: 1, b: 2, [Symbol("test")]: "Surya"}) ) {
// 	console.log(k);
// }

function objectEntriesWithIterator ( obj ) {
	const itr = Reflect.ownKeys(obj)[Symbol.iterator]();
	return {
		[Symbol.iterator]() {
			return this;
		},
		next () {
			const val = itr.next();
			if ( val.done ) return { done: true };
			else return { value: {
				key: val.value,
				value: obj[val.value]
			} };
		}
	}
}

// for ( const k of objectEntriesWithIterator({ a: 1, b: 2, [Symbol("test")]: "Surya"}) ) {
// 	console.log(k);
// }

// Return iterable for first n items
function take ( iterable, n ) {
	const itr = iterable[Symbol.iterator]();
	return {
		[Symbol.iterator] () {
			return this;
		},
		next () {
			if ( n-- > 0 ) return itr.next();
			return { done: true };
		}
	}
}

// const arr = ['a', 'b', 'c', 'd'];
// for (const x of take(arr, 5)) {
//     console.log(x);
// }



// Zip iterables

function zip ( ...iterables ) {
	const itrs = iterables.map(i => i[Symbol.iterator]());
	return {
		[Symbol.iterator] () {
			return this;
		},
		next () {
			let done = true;
			const vals = itrs.map(( itr ) => {
				const nxt = itr.next();
				if ( nxt.done ) return null;
				done = false;
				return nxt.value;
			});
			if ( done ) return { done: true };
			return { value: vals };
		}
	}
}

// const zipped = zip([1, 2, 3], [10, 11, 12, 13], [40, 41]);
// for ( const r of zipped ) {
// 	console.log(r);
// }



// Infinite iterables
function naturalNumbers () {
	let n = 0;
	return {
		[Symbol.iterator] () {
			return this;
		},
		next () {
			return { value: ++n };
		}
	}
}

// for (const x of take(naturalNumbers(), 2)) {
//     console.log(x);
// }



// ECMAScript 6 iteration protocol
// interface Iterable {
//     [Symbol.iterator] (): Iterator
// }

// interface Iterator {
//     next () : IteratorResult
// }

// interface IteratorResult {
//     done: Boolean,
//     value: any
// }


// Iterable with different iterator each time
const iterable2 = {
    [Symbol.iterator] () {
        return {
            next() {
                return { value: "Hello" };
            }
        }
    }
}

function getIterator ( iterable ) {
    return iterable[Symbol.iterator]();
}

// console.log(getIterator(iterable2) === getIterator(iterable2));

// Iterable with same iterator each time
const iterable3 = {
    [Symbol.iterator] () {
        return this;
    },
    next() {
        return { value: "Hello" };
    }
}

function getIterator ( iterable ) {
    return iterable[Symbol.iterator]();
}

// console.log(getIterator(iterable3) === getIterator(iterable3));



// Return in iterators
function createIterable () {
    let n = 5;
    return {
        [Symbol.iterator] () {
            return this;
        },
        next () {
            if ( n-- > 0 ) return { value: n };
            return { done: true };
        },
        return () {
            console.log("Return called");
            n = -1;
            return { done: true };
        }
    }
}

const v = createIterable();

for ( const k of v ) {
    console.log(k);
    break;
}
console.log(v.next());