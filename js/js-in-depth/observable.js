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
