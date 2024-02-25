/**
 * Promise can have either of two states Pending or Setteled(Resolved or Rejected)
 */

function isThenable ( input ) {
    return input && typeof input === "object" && input !== null && input.then && typeof input.then === "function";
}

const STATE = Object.freeze({
    PENDING: Symbol("PENDING"), 
    FULLFILLED: Symbol("FULLFILLED"), 
    REJECTED: Symbol("REJECTED")
});

class ToyPromise {

    constructor ( execFn ) {
        this.state = STATE.PENDING;
        this.value = null;
        this.successCb = [];
        this.errorCb = [];

        execFn(this.#resolve.bind(this), this.#reject.bind(this));
    }

    #resolve( data ) {
        console.log("to resolve ", this.state);
        if ( this.state !== STATE.PENDING ) return;
        if ( isThenable(data) ) return data.then(this.#resolve.bind(this), this.#reject.bind(this));
        this.state = STATE.FULLFILLED;
        this.value = data;
        setTimeout(() => {
            for ( const cb of this.successCb ) {
                if ( typeof cb === "function" ) cb(data);
            }
            this.successCb = [];
            this.errorCb = [];
        }, 0);
    }

    #reject( err ) {
        if ( this.state !== STATE.PENDING ) return;
        if ( isThenable(err) ) return data.then(this.#resolve.bind(this), this.#reject.bind(this));
        this.state = STATE.REJECTED;
        this.value = err;
        setTimeout(() => {
            for ( const cb of this.errorCb ) {
                if ( typeof cb === "function" ) cb(err);
            }
            this.successCb = [];
            this.errorCb = [];
        }, 0);
    }

    then ( successCb, errorCb ) {
        return new ToyPromise(( resolve, reject ) => {
            if ( this.state !== STATE.PENDING ) {
                if ( this.state === STATE.FULLFILLED ) {
                    setTimeout(() => {
                        if ( successCb && typeof successCb === "function" ) {
                            const resp = successCb(this.value);
                            // Consider if resp is theneable
                            if ( resolve && typeof resolve === "function" ) resolve(resp);
                        } else {
                            if ( resolve && typeof resolve === "function" ) resolve(this.value);
                        }
                    }, 0);
                } else {
                    setTimeout(() => {
                        if ( errorCb && typeof errorCb === "function" ) {
                            const resp = errorCb(this.value);
                            // Consider if resp is theneable
                            if ( resolve && typeof resolve === "function" ) resolve(resp);
                        } else {
                            if ( reject && typeof reject === "function" ) reject(this.value);
                        }
                    }, 0);
                }
            } else {
                this.successCb.push(() => {
                    if ( successCb && typeof successCb === "function" ) {
                        const resp = successCb(this.value);
                        // Consider if resp is theneable
                        if ( resolve && typeof resolve === "function" ) resolve(resp);
                    } else {
                        if ( resolve && typeof resolve === "function" ) resolve(this.value);
                    }
                });
                this.errorCb.push(() => {
                    if ( errorCb && typeof errorCb === "function" ) {
                        const resp = errorCb(this.value);
                        // Consider if resp is theneable
                        if ( resolve && typeof resolve === "function" ) resolve(resp);
                    } else {
                        if ( reject && typeof reject === "function" ) reject(this.value);
                    }
                });
            }
        });
    }

    catch ( errorCb ) {
        if ( this.state === STATE.REJECTED ) {
            setTimeout(() => {
                if ( errorCb && typeof errorCb === "function" ) cb(this.value);
            }, 0);
        } else {
            if ( errorCb ) this.errorCb.push(errorCb);
        }
    }

    #enqueTask () {

    }
}

function refh () {
    return new Promise(( res, rej ) => {
        setTimeout(() => {
            res();
        }, 5000);
    });
}

async function main () {
    const prom = new ToyPromise(( resolve, reject ) => {
        console.log("exec");
        setTimeout(() => {
            resolve(new ToyPromise(( resolve1, reject1 ) => {
                console.log("exec inner");
                setTimeout(() => {
                    reject1();
                }, 1000);
            }));
        }, 1000);
    });
    
    prom.then(resp => {
        console.log("1");
    });
    
    prom.then(resp => {
        console.log("2");
    });

    prom.catch(resp => {
        console.log("3");
    });

    await refh();
}

main();
