class Solution27 {
    // Function to find the minimum number of platforms required at the
    // railway station such that no train waits.
    findPlatform(arr, dep) {
        const time = new Array(2400).fill(0);
        for ( let i = 0; i < arr.length; i++ ) {
            time[arr[i]]++;
        }
        
        for ( let i = 0; i < dep.length; i++ ) {
            time[dep[i] + 1]--;
        }
        let max = 0, c = 0;
        for ( let i = 0; i < time.length; i++ ) {
            c += time[i];
            max = Math.max(max, c);
        }
        return max;
    }
}

const sol27 = new Solution27();
console.log(sol27.findPlatform([]));