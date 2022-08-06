const Heap = require("./Heap");

class Key {
    char;
    freq;

    constructor ( c, f ) {
        this.char = c;
        this.freq = f;
    }
}

class ReArrangeString extends Heap {
    constructor ( size ) {
        super(size);
    }

    reArrange ( str ) {
        const sMap = {};
        for ( let i = 0; i < str.length; i++ ) {
            const ref = str[i];
            if ( !sMap.hasOwnProperty(ref) ) {
                sMap[ref] = 0;
            }
            sMap[ref] += 1;
        }
        console.log("sMap", sMap);
        const arr = [];
        for ( let key in sMap ) {
            this.size += 1;
            const keyIns = new Key(key, sMap[key]);
            arr.push(keyIns);
        }
        this.buildHeap(arr);

        let resStr = "";
        let prevKey = new Key("#", -1);
        while ( this.size > 0 ) {
            const top = this.removeTop(arr);
            resStr += top.char;
            top.freq -= 1;
            if ( prevKey.freq > 0 ) {
                this.insert(arr, prevKey);
            }
            console.log("curr", top);
            prevKey = top;
        }
        if ( resStr.length < str.length ) {
            return "Not possible";
        }
        return resStr;
    }
}

const yr = new ReArrangeString(0);
const sr = yr.reArrange("aaaabc");
console.log("sr", sr);
