/**
 * Implement an abortable API call either explicitly by user or implicitly
 * due to timeout
*/

function fetchVideo ( url ) {
    const controller = new AbortController();
    const timeoutSignal = AbortSignal.timeout(5000);
    fetch(url, { signal: AbortSignal.any([controller.signal, timeoutSignal]) }).then(resp => {

    }).catch(err => {
        if ( err.name === "AbortError" ) {
            console.log("User aborted download");
        } else if ( err.name === "TimeoutError" ) {
            console.log("Video download took more than 5 seconds");
        } else {
            console.log(err.message);
        }
    });
}

/**
 * Q: Create an abortable API
*/

function abortableAPI ({ signal }) {
    const prom = new Promise(( resolve, reject ) => {
        if ( signal.aborted ) return reject(signal.reason);
        signal.addEventListener("abort", () => {
            reject(signal.reason);
        });
    });
}