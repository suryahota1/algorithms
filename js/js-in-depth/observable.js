class Observable {
    execFunction;
    done;
    constructor ( fn ) {
        this.execFunction = fn;
    }
}

Observable.prototype.subscribe = function ( ref ) {
    let unsubscribed = false;
    const obj = {
        next: ( data ) => {
            if ( this.done || unsubscribed ) return;
            const fn = typeof ref.next === "function" ? ref.next : ref;
            fn(data);
        }, 
        error: ( data ) => {
            if ( this.done || unsubscribed ) return;
            this.done = true;
            if ( typeof ref.error === "function" ) ref.error(data);
        }, 
        complete: ( data ) => {
            if ( this.done || unsubscribed ) return;
            this.done = true;
            if ( typeof ref.complete === "function" ) ref.complete(data);
        }
    };
    this.execFunction(obj);
    return {
        unsubscribe() {
            unsubscribed = true;
        }
    }
}

/**
 * Subscribing to an Observable is analogous to calling a Function. Because observables are also not executed until subscribed i.e observables 
 * lazily computed. Alsoeach subscription causes a separate side effect.
 */

// from operator for creating observable

function createObservableFromArray ( arr ) {
    return new Observable(( subscriber ) => {
        arr.forEach(element => {
            subscriber.next(element);
        });
        subscriber.complete();
    });
}

function createObservableFromPromise ( prom ) {
    return new Observable(( subscriber ) => {
        prom.then(( data ) => {
            subscriber.next(data);
            subscriber.complete();
        }).catch(( err ) => {
            subscriber.error(err);
        });
    });
}

function createObservableFromIterator ( itr ) {
    return new Observable(( subscriber ) => {
        try {
            while ( itr.hasNext() ) subscriber.next(itr.next().value);
            subscriber.complete();
        } catch ( err ) {
            subscriber.error(err);
        }
    });
}

function from ( obj ) {
    if ( Array.isArray(obj) ) return createObservableFromArray(obj);
    else if ( obj instanceof Promise ) return createObservableFromPromise(obj);
    else if ( obj.prototype[Symbol.iterator] ) return createObservableFromIterator(obj);
    throw new Error("Unknown type");
}


// Observer interface

const Observer = {
    next: data => console.log("Observer got next value " + data), 
    error: err => console.log("Observer got an error " + err), 
    complete: err => console.log("Observer got all values"), 
}

// Subscription interface

const Subscription = {
    unsubscribe: () => {
        console.log("To unsubscribe observable execution");
    }
};

// Subject
// Observables are unicast whereas Subjects are multicast

class Subject {
    observers;
    constructor () {
        this.observers = [];
    }

    subscribe ( observer ) {
        this.observers.push(observer);
        return {
            unsubscribe: () => {
                this.observers = this.observers.filter(ob => ob !== observer);
            }
        }
    }

    next ( data ) {
        this.observers.forEach(observer => observer.next(data));
    }
}

// Multicasted observables

class ConnectableObservable extends Observable {
    subject;
    constructor ( execFunc, subject ) {
        super(execFunc);
        this.subject = subject;
    }

    connect () {
        this.subscribe(this.subject);
    }
}

function multicast ( execFunc, subject ) {
    return new ConnectableObservable(execFunc, subject);
}

const sourceObservable = from([a, 2, 3]);
const subject = new Subject();
const multicasted = sourceObservable.pipe(multicast(subject));

multicasted.subscribe({
    next: (d) => {}
});
multicasted.subscribe({
    next: (d) => {}
});

multicasted.connect();

// Pipeable functions
function pipe ( ...fns ) {
    return function ( ...args ) {
        return fns.reduce((acc, curr) => curr(...acc), args);
    }
}

// BehaviourSubject

class BehaviourSubject {

    observers;
    latestValue;

    constructor ( initialValue ) {
        this.latestValue = initialValue;
    }

    subscribe ( observer ) {
        this.observers.push(observer);
        if ( this.initialValue ) {
            observer.next(this.initialValue);
        }
        return {
            unsubscribe: () => {
                this.observers = this.observers.filter(ob => ob !== observer);
            }
        }
    }

    next ( data ) {
        this.observers.forEach(observer => observer.next(data));
    }
}

// ReplaySubject
class ReplaySubject {

    values;
    bufferSize;
    windowTime;
    observers;

    constructor ( bufferSize, windowTime ) {
        this.values = [];
        this.bufferSize = bufferSize;
        this.windowTime = windowTime;
    }

    subscribe ( observer ) {
        this.observers.push(observer);
        if ( this.values.length > 0 ) {
            this.values.forEach(value => observer.next(this.windowTime ? value[0] : value));
        }
        return {
            unsubscribe: () => {
                this.observers = this.observers.filter(ob => ob !== observer);
            }
        }
    }

    next ( data ) {
        const timestamp = new Date().valueOf();
        this.observers.forEach(observer => observer.next(data));
        if ( this.windowTime ) {
            let splitIdx;
            for ( let i = this.values.length - 1; i >= 0; i-- ) {
                if ( this.values[i][1] < timestamp - this.windowTime ) {
                    splitIdx = i;
                    break;
                }
            }
            if ( splitIdx >= 0 ) {
                this.values = this.values.slice(splitIdx + 1);
            }
        }
        if ( this.values.length === this.bufferSize ) {
            this.values.shift();
        }
        this.values.push(this.windowTime ? [data, timestamp] : data);
    }
}

// AsyncSubject

class AsyncSubject {

    value;
    observers;
    done;

    constructor () {
        this.observers = [];
        this.done = false;
    }

    subscribe ( observer ) {
        if ( this.done ) return;
        this.observers.push(observer);
        return {
            unsubscribe: () => {
                this.observers = this.observers.filter(ob => ob !== observer);
            }
        }
    }

    next ( data ) {
        if ( this.done ) return;
        this.value = data;
    }

    complete () {
        if ( this.done ) return;
        this.done = true;
        this.observers.forEach(observer => observer.next(data));
    }
}

// Operators implementation
// Creation operators

// range
function range ( start, count=1 ) {
    if ( isNaN(start) || isNaN(count) ) throw new Error("Invalid arguments");
    return new Observable(( subscriber ) => {
        let i = 0;
        while ( i < count ) {
            subscriber.next(start + i);
        }
        subscriber.complete();
    });
}

// fromEvent
function fromEvent ( target, eventName ) {
    return new Observable(( subscriber ) => {
        target.addEventListener(eventName, ( event ) => {
            subscriber.next(event.target.value);
        });
    });
}

// combineLatest
function combineLatest ( ...observables ) {
    function unsubscribeAll () {
        subscriptions.forEach(subscription =>subscriptions.unsubscribe());
    }
    if ( !observables || observables.length === 0 ) throw new Error("No observable available");
    let receiverCount = 0, completionCount = 0;
    const response = [];
    let subscriptions = [];

    return new Observable(( subscriber ) => {
        observables.forEach(( observable, index ) => {
            const subscription = observable.subscribe({
                next: ( data ) => {
                    if ( receiverCount < observables.length ) receiverCount++;
                    response[index] = data;
                    if ( receiverCount === observables.length ) subscriber.next(response);
                }, 
                complete: () => {
                    if ( ++completionCount === observables.length ) {
                        unsubscribeAll();
                        subscriber.complete();
                    }
                }, 
                error: ( err ) => {
                    unsubscribeAll();
                    subscriber.error(err);
                }
            });
            subscriptions[index] = subscription;
        });
    });
}

// concat
function concat ( ...observables ) {
    function recSub ( index, subscriber ) {
        if ( index === observables.length ) subscriber.complete();
        observables[index].subscribe({
            next: ( data ) => {
                subscriber.next(data);
            }, 
            complete: () => {
                recSub(++index, subscriber);
            }, 
            error: ( err ) => {
                subscriber.error(err);
            }
        });
    }
    return new Observable(( subscriber ) => {
        if ( !observables || observables.length === 0 ) subscriber.complete();
        recSub(0, subscriber);
    });
}
