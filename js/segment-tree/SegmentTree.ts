export type Operator<T> = (leftValue: T, rightValue: T) => T;

export class SegmentTree<T> {

    segmentTree: T[];
    operator: Operator<T>;
    neutralElement: T;
    inputArrRightIdx: number;
    
    constructor ( inputArray: T[], operator: Operator<T>, neutralElement: T ) {
        this.operator = operator;
        this.neutralElement = neutralElement;
        this.initializeSegemtTree(inputArray);
    }

    private initializeSegemtTree ( inputArray: T[] ) {
        if ( !inputArray || !inputArray.length ) throw new Error("Invalid arguments");
        this.inputArrRightIdx = inputArray.length - 1;
        this.segmentTree = new Array(4 * inputArray.length);
        this.constructTree(0, 0, inputArray.length - 1, inputArray);
    }

    private constructTree (segmentTreeIdx: number, inputArrayLeftIdx: number, inputArrayRightIdx: number, inputArray: T[]): void {
        if ( inputArrayLeftIdx === inputArrayRightIdx ) {
            this.segmentTree[segmentTreeIdx] = inputArray[inputArrayLeftIdx];
        } else {
            const inputArrayMidIdx = Math.floor((inputArrayLeftIdx + inputArrayRightIdx) / 2);
            const segmentTreeLeftIdx = 2 * segmentTreeIdx + 1;
            const segmentTreeRightIdx = 2 * segmentTreeIdx + 2;

            this.constructTree(segmentTreeLeftIdx, inputArrayLeftIdx, inputArrayMidIdx, inputArray);
            this.constructTree(segmentTreeRightIdx, inputArrayMidIdx + 1, inputArrayRightIdx, inputArray);

            this.segmentTree[segmentTreeIdx] = this.operator(this.segmentTree[segmentTreeLeftIdx], this.segmentTree[segmentTreeRightIdx]);
        }
    }

    public rangeQuery ( inputArrayLeftIdx: number, inputArrayRightIdx: number ) {
        return this.querySegmentTree(0, inputArrayLeftIdx, inputArrayRightIdx, 0, this.inputArrRightIdx);
    }

    private querySegmentTree ( segmentTreeIdx: number, queryLeftIdx: number, queryRightIdx: number, actualLeftIdx: number, actualRightIdx: number ): T {
        if ( queryLeftIdx >= actualLeftIdx && queryRightIdx <= actualRightIdx ) {
            return this.segmentTree[segmentTreeIdx];
        }
        if ( queryRightIdx < actualLeftIdx || queryLeftIdx > actualRightIdx ) return this.neutralElement;

        const actualMidIdx = Math.floor((actualLeftIdx + actualRightIdx) / 2);
        const segmentTreeLeftIdx = 2 * segmentTreeIdx + 1;
        const segmentTreeRightIdx = 2 * segmentTreeIdx + 1;

        const leftResp = this.querySegmentTree(segmentTreeLeftIdx, queryLeftIdx, queryRightIdx, actualLeftIdx, actualMidIdx);
        const rightResp = this.querySegmentTree(segmentTreeRightIdx, queryLeftIdx, queryRightIdx, actualMidIdx + 1, actualRightIdx);

        return this.operator(leftResp, rightResp);
    }

    public updatePoint ( inputArrayIdx: number, value: T ) {
        this.updateSegementTree(0, 0, this.inputArrRightIdx, inputArrayIdx, value);
    }

    private updateSegementTree ( segmentTreeIdx: number, leftIdx: number, rightIdx: number, targetIdx: number, value: T ): void {
        if ( leftIdx === rightIdx ) {
            this.segmentTree[segmentTreeIdx] = value;
        } else {
            const midIdx = Math.floor((leftIdx + rightIdx) / 2);
            const segmentTreeLeftIdx = 2 * segmentTreeIdx + 1;
            const segmentTreeRightIdx = 2 * segmentTreeIdx + 1;

            if ( targetIdx >= leftIdx && targetIdx <= midIdx ) {
                this.updateSegementTree(segmentTreeLeftIdx, leftIdx, midIdx, targetIdx, value);
            } else {
                this.updateSegementTree(segmentTreeRightIdx, midIdx + 1, rightIdx, targetIdx, value);
            }

            this.segmentTree[segmentTreeIdx] = this.operator(this.segmentTree[segmentTreeLeftIdx], this.segmentTree[segmentTreeRightIdx]);
        }
    }
}