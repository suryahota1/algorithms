function swapVal ( list, i, j ) {
    const temp = list[j];
    list[j] = list[i];
    list[i] = temp;
}

function selectionSort ( list=[] ) {
    const n = list.length;
    for ( let i = 0; i < n - 1; i++ ) {
        let minIdx = i;
        for ( let j = i + 1; j < n; j++ ) {
            minIdx = list[j] < list[minIdx] ? j : minIdx;
        }
        if ( minIdx !== i ) swapVal(list, i, minIdx);
    }
}

const ip = [25, 9, 1, 5, 7, 18, 25];

function stableSelectionSort ( list ) {
    const n = list.length;
    for ( let i = 0; i < n - 1; i++ ) {
        let minIdx = i;
        for ( let j = i + 1; j < n; j++ ) {
            minIdx = list[j] < list[minIdx] ? j : minIdx;
        }
        if ( minIdx !== i ) {
            const val = list[minIdx];
            while ( minIdx > i ) {
                list[minIdx] = list[minIdx-- - 1];
            }
            list[minIdx] = val;
        }
    }
}

stableSelectionSort(ip);
console.log(ip);



function selSort2 ( arr ) {
    for ( let i = 0; i < arr.length; i++ ) {
        let minIdx = i;
        for ( let j = i; j < arr.length; j++ ) {
            if ( arr[j] < arr[minIdx] ) minIdx = j;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}
