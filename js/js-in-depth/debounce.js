
function throttle ( fn, delay ) {
    let flag = false;
    let timer;
    let invokeTime;
    return function ( ...args ) {
        let context = this;
        if ( !flag ) {
            invokeTime = new Date().valueOf();
            flag = true;
            fn.apply(context, args);
            setTimeout(() => {
                flag = false;
            }, delay);
        } else {
            if ( timer ) {
                clearTimeout(timer);
                timer = null;
            }
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay - (new Date().valueOf() - invokeTime));
        }
    }
}

function debounce ( fn, delay ) {
    let timer;
    return function ( ...args ) {
        let context = this;
        if ( timer ) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

function test ( ...args ) {
    console.log("test called" + args);
}

const throttledTest = debounce(test, 4000);
throttledTest(1, 2);
throttledTest(4, 5);
throttledTest(4, 5);
throttledTest(4, 5);
throttledTest(4, 5);
throttledTest(7, 8);