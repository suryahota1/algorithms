function getCompactObject ( obj ) {
    console.log("getCompactObject obj", obj);
    if ( Array.isArray(obj) ) return obj.filter(item => {
        const u = getCompactObject(item);
        console.log("item and u", item, u);
        return u;
    });
    if ( typeof obj === "object" && obj !== null ) {
        const newObj = {};
        for ( let key in obj ) {
            let val = getCompactObject(obj[key]);
            if ( val ) newObj[key] = val;
        }
        return newObj;
    } else {
        return Boolean(obj);
    }
}

const ip4 = [null, 0, 5, [0], [false, 16]];
console.log(getCompactObject(ip4));