// // Sample Promise
// const STATE = {
//     PENDING: "PENDING",
//     FULLFILLED: "FULLFILLED",
//     REJECTED: "REJECTED"
// };
// class MyPromise {
    
//     constructor ( fn ) {
//         this.state = STATE.PENDING;
//         this.value = undefined;
//         this.successChain = [];
//         this.failureCb = undefined;
//         this.finallyCb = undefined;

//         fn(this._resolve.bind(this), this._reject.bind(this));
//     }

//     _resolve ( value ) {
//         this.handleResult(STATE.FULLFILLED, value);
//     }

//     _reject ( error ) {
//         // this.handleResult(STATE.REJECTED, error);
//         this.state = STATE.REJECTED;
//         this.failureCb();
//     }

//     handleResult ( status, result ) {
//         if ( this.state !== STATE.PENDING ) {
//             return;
//         }
//         // setTimeout(() => {
//         //     // Handle if the returned value is theneable
//         //     this.state = status;
//         //     this.value = result;

//         //     this.executeHandlers();
//         // }, 0);
//         try {
//             for ( let i = 0; i < this.successChain.length; i++ ) {
//                 result = this.successChain[i](result);
//             }
//             this.state = STATE.FULLFILLED;
//         } catch ( e ) {
//             this.successChain = [];
//             this.failureCb(e);
//         }
//     }

//     isThenable ( value ) {
//         return value instanceof MyPromise;
//     }
    
//     executeHandlers () {

//     }

//     then ( cb ) {
//         this.successChain.push(cb);
//         return this;
//     }

//     catch ( cb ) {
//         this.failureCb = cb;
//         return this;
//     }

//     finally ( cb ) {
//         this.finallyCb = cb;
//     }
// }

// // Calling async functions in a loop

// // async function asyncTask () {
// //     setTimeout(() => {
// //         console.log("task");
// //     }, 1500);
// // }
// // let val = [1, 2, 3, 4];
// // val = val.map(async () => {
// //     return asyncTask();
// // });
// // console.log("dsdsfdsd");
// // (async () => {
// //     for ( let i = 0; i < val.length; i++ ) {
// //         await val[i];
// //     }
// // })();

// // Creating a custom Promise.all
// // Iterative solution
// Promise.prototype.myAll = function ( promArr ) {
//     return new Promise(( resolve, reject ) => {
//         const arr = new Array(promArr.length);
//         let counter = 0;
//         let rejected = false;
//         for ( let i = 0; i < promArr.length; i++ ) {
//             promArr[i].then(( resp ) => {
//                 arr[i] = resp;
//                 if ( ++counter == promArr.length && !rejected ) resolve(arr);
//             }).catch(( err ) => {
//                 rejected = true;
//                 reject(err);
//             })
//         }
//     });
// }

// // Creating a custom Promise.all
// // Recursive solution

// const prom1 = new Promise(( resolve, reject ) => {
//     console.log("prom1 inst");
//     setTimeout(() => {
//         console.log("prom1 timer");
//         resolve(1);
//     }, 1000);
// });

// const prom2 = new Promise(( resolve, reject ) => {
//     console.log("prom2 inst");
//     setTimeout(() => {
//         console.log("prom2 timer");
//         resolve(2);
//     }, 1000);
// });

// const refArr = [prom1, prom2];

// Promise.recMyAll = function ( promArr ) {
//     return new Promise(( resolve, reject ) => {
//         if ( promArr.length == 0 ) resolve([]);
//         const [ curr, ...rest ] = promArr;
//         let respVal = null;
//         let errVal = null;
//         const wait = curr.then(( resp ) => {
//             respVal = resp;
//             return resp;
//         }).catch(( err ) => {
//             errVal = err;
//             return err;
//         });
        
//         this.recMyAll(rest).then(( resp ) => {
//             if ( respVal || errVal ) {
//                 if ( errVal ) {
//                     reject(errVal);
//                 } else {
//                     resolve([respVal, ...resp]);
//                 }
//             } else {
//                 wait.then(( resp22 ) => {
//                     resolve([resp22, ...resp]);
//                 }).catch(( err22 ) => {
//                     reject(err22);
//                 });
//             }
//         }).catch(( err ) => {
//             reject(err);
//         });
//     });
// }

// Promise.recMyAll(refArr).then(( resp ) => {
//     console.log("resp =======", resp);
// }).catch(( err ) => {
//     console.log("err =======", err);
// })


function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(reject, 10, 'Error happened11');
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 5000, 'Error happened22');
    });
}

async function test() {
    try {
        // let message = job();
        await job2();
        await job();

        return 'Hello world';
    } catch (error) {
        console.error(error);

        return 'Error happened during test';
    }
}

test().then(function(message) {
    console.log(message);
});