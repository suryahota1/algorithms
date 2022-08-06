class MostFrequentNumberFollowingKey {

    getFreqNum ( arr, key ) {
        const tgMap = {};
        let maxC = 0;
        let maxEle;

        for ( let i = 1; i < arr.length; i++ ) {
            if ( arr[i - 1] === key ) {
                if ( !tgMap.hasOwnProperty(arr[i]) ) {
                    tgMap[arr[i]] = 0;
                }
                tgMap[arr[i]] += 1;
                if ( tgMap[arr[i]] > maxC ) {
                    maxC = tgMap[arr[i]];
                    maxEle = arr[i];
                }
            }
        }
        console.log(tgMap);
        return maxEle;
    }
}

const ank = new MostFrequentNumberFollowingKey();
const a = ank.getFreqNum([2,2,2,2,3], 2);
console.log(a);
