class HillsAndValleys {

    getHillsValleys ( arr ) {
        let hillValleyCount = 0;
        let prevIdx = 0;
        for ( let i = 1; i < arr.length - 1; i++ ) {
            if ( arr[i] === arr[i + 1] ) continue;
            if ( ( arr[i] > arr[i + 1] && arr[i] > arr[prevIdx] ) || ( arr[i] < arr[i + 1] && arr[i] < arr[prevIdx] ) ) {
                hillValleyCount++;
                prevIdx = i;
            }
        }
        return hillValleyCount;
    }
}

const onj = new HillsAndValleys();
const a = onj.getHillsValleys([6,6,5,5,4,1]);
console.log(a);
