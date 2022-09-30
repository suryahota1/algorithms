// Sample Promise
const STATE = {
    PENDING: "PENDING",
    FULLFILLED: "FULLFILLED",
    REJECTED: "REJECTED"
};
class MyPromise {
    
    constructor ( fn ) {
        this.state = STATE.PENDING;
        this.value = undefined;
        this.successChain = [];
        this.failureCb = undefined;
        this.finallyCb = undefined;

        fn(this._resolve.bind(this), this._reject.bind(this));
    }

    _resolve ( value ) {
        this.handleResult(STATE.FULLFILLED, value);
    }

    _reject ( error ) {
        // this.handleResult(STATE.REJECTED, error);
        this.state = STATE.REJECTED;
        this.failureCb();
    }

    handleResult ( status, result ) {
        if ( this.state !== STATE.PENDING ) {
            return;
        }
        // setTimeout(() => {
        //     // Handle if the returned value is theneable
        //     this.state = status;
        //     this.value = result;

        //     this.executeHandlers();
        // }, 0);
        try {
            for ( let i = 0; i < this.successChain.length; i++ ) {
                result = this.successChain[i](result);
            }
            this.state = STATE.FULLFILLED;
        } catch ( e ) {
            this.successChain = [];
            this.failureCb(e);
        }
    }

    isThenable ( value ) {
        return value instanceof MyPromise;
    }
    
    executeHandlers () {

    }

    then ( cb ) {
        this.successChain.push(cb);
        return this;
    }

    catch ( cb ) {
        this.failureCb = cb;
        return this;
    }

    finally ( cb ) {
        this.finallyCb = cb;
    }
}