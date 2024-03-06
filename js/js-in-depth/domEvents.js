/**
 * Q: Check if the you can add a passive listner 
 * A: For adding passive listners, we need to check if the current browser supports
 *    an object as the third parameter while adding event listners. This is to be done
 *    without breaking code i.e. needs to be gracefully handled
*/

function checkIfConfigSupported () {
    let isSupported = false;
    try {
        const options = {
            get passive() {
                isSupported = true;
            }
        }

        document.addEventListener("test", null, options);
        document.removeEventListener("test", null, options);
        return isSupported;
    } catch ( e ) {
        return isSupported;
    }
}

// Now we can safely add config object or a boolean value to any target 
const isConfigSupported = checkIfConfigSupported();
someTarget.addEventListener("click", listner, isConfigSupported ? { once: true, passive: true } : true);

/**
 * Q: Attach event listeners with handleEvent method of object
 * A: We can add event listener to any target by either giving a function or an object
 *    with handleEvent method or null
*/

class AttachEvent {

    constructor ( target, eventNames ) {
        for ( const eventName of eventNames ) {
            target.addEventListener(eventName, this, checkIfConfigSupported() ? { once: true } : true);
        }
    }

    handleEvent ( event ) {
        switch ( event.type ) {
            case "click": {
                console.log("target clicked");
            }
            case "dblclick": {
                console.log("target double clicked");
            }
        }
    }
}

new AttachEvent(document.body, ["click", "dblclick"]);

/**
 * Q: Add an abortable listener to element
*/

function addAbortableListener ( element, eventType, listener ) {
    const isConfigSupported = checkIfConfigSupported();
    if ( isConfigSupported ) {
        const controller = new AbortController();

        element.addEventListener(eventType, listener, { signal: controller.signal });
        return controller;
    }
    element.addEventListener(eventType, listener);
    return null;
}

function testFn () {
    const element = document.body;
    let controller;
    function handler () {
        console.log("controller", controller);
        if ( handler ) {
            controller.abort();
        }
    }
    controller = addAbortableListener(element, "click", handler);
}
