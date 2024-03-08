// Private data fields

class Demo {
    #privateField;
    publicProperty;

    constructor () {
        this.#privateField = 2;
        this.publicProperty = 5;
    }
}

const d1 = new Demo();

// Internally how private fields work

/**
 * There may be a symbol created and the scope is within the class only. No private 
 * property created as such on the instance. Rather for all the private fields a 
 * corresponding symbol is created e.g something like below.
 * 
 *  class Demo {
 *      const map = new Map();
 * 
 *      function createPrivateField ( key, value ) {
 *          const keyName = Symbol(key + "_key");
 *          map.set(keyName, value);
 *      }
 *      
 *      function getPrivateField ( key ) {
 *          const key = Symbol.for(key + "_key");
 *          map.get(key);
 *      }
 *  }
 * 
*/
