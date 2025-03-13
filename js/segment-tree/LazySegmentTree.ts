import { Operator, SegmentTree } from "./SegmentTree";

type RangeOperation<T> = ( startIdx: number, endIdx: number, currentValue: T, lazyValue: T ) => T;

export class LazySegmentTree<T> extends SegmentTree<T> {

    lazy: T[];
    defaultZeroValue: T;
    rangeOperation: RangeOperation<T>;
    
    constructor ( inputArray: T[], operator: Operator<T>, neutralElement: T, defaultZeroValue: T, rangeOperation: RangeOperation<T> ) {
        super(inputArray, operator, neutralElement);
        this.lazy = new Array(4 * inputArray.length).fill(defaultZeroValue);
        this.rangeOperation = rangeOperation;
    }

    updateRange ( startIdx: number, endIdx: number, value: T ) {
        this.updateSegmentTreeLazy(0, startIdx, endIdx, 0, this.inputArrRightIdx, value);
    }

    private updateSegmentTreeLazy ( segmentTreeIdx: number, queryStartIdx: number, queryEndIdx: number, actualStartIdx: number, actualEndIdx: number, lazyValue: T ): void {
        // First resolve previous pending update
        if ( this.lazy[segmentTreeIdx] !== this.defaultZeroValue ) {
            this.segmentTree[segmentTreeIdx] = this.rangeOperation(actualStartIdx, actualEndIdx, this.segmentTree[segmentTreeIdx], this.lazy[segmentTreeIdx]);
        }
        if ( actualStartIdx !== actualEndIdx ) {
            this.segmentTree[2 * segmentTreeIdx + 1] = this.lazy[segmentTreeIdx];
            this.segmentTree[2 * segmentTreeIdx + 2] = this.lazy[segmentTreeIdx];
        }
        this.lazy[segmentTreeIdx] = this.defaultZeroValue;

        if ( queryStartIdx > actualEndIdx || queryEndIdx < actualStartIdx ) return;
        if ( queryStartIdx >= actualStartIdx && queryEndIdx <= actualEndIdx ) {
            this.segmentTree[segmentTreeIdx] = this.rangeOperation(actualStartIdx, actualEndIdx, this.segmentTree[segmentTreeIdx], lazyValue);

            if ( actualStartIdx !== actualEndIdx ) {
                this.segmentTree[2 * segmentTreeIdx + 1] = lazyValue;
                this.segmentTree[2 * segmentTreeIdx + 2] = lazyValue;
            }
            return;
        }
        const actualMidIdx = Math.floor((actualStartIdx + actualEndIdx) / 2);
        const segmentTreeLeftIdx = 2 * segmentTreeIdx + 1;
        const segmentTreeRightIdx = 2 * segmentTreeIdx + 1;

        this.updateSegmentTreeLazy(segmentTreeLeftIdx, queryStartIdx, queryEndIdx, actualStartIdx, actualMidIdx, lazyValue);
        this.updateSegmentTreeLazy(segmentTreeRightIdx, queryStartIdx, queryEndIdx, actualMidIdx + 1, actualEndIdx, lazyValue);

        this.segmentTree[segmentTreeIdx] = this.operator(this.segmentTree[segmentTreeLeftIdx], this.segmentTree[segmentTreeRightIdx]);
    }

    queryLazy ( startIdx: number, endIdx: number ) {

    }

    querySegmentTreeLazy ( segmentTreeIdx: number, queryStartIdx: number, queryEndIdx: number, actualStartIdx: number, actualEndIdx: number ): T {
        if ( this.lazy[segmentTreeIdx] !== this.defaultZeroValue ) {
            this.segmentTree[segmentTreeIdx] = this.rangeOperation(actualStartIdx, actualEndIdx, this.segmentTree[segmentTreeIdx], this.lazy[segmentTreeIdx]);
        }

        if ( actualStartIdx !== actualEndIdx ) {
            this.segmentTree[2 * segmentTreeIdx + 1] = this.lazy[segmentTreeIdx];
            this.segmentTree[2 * segmentTreeIdx + 2] = this.lazy[segmentTreeIdx];
        }
        this.lazy[segmentTreeIdx] = this.defaultZeroValue;

        if ( queryStartIdx > actualEndIdx || queryEndIdx < actualStartIdx ) {
            return this.defaultZeroValue;
        }
        if ( queryStartIdx >= actualStartIdx && queryEndIdx <= actualEndIdx ) {
            return this.segmentTree[segmentTreeIdx];
        }
        
        const actualMidIdx = Math.floor((actualStartIdx + actualEndIdx) / 2);
        const segmentTreeLeftIdx = 2 * segmentTreeIdx + 1;
        const segmentTreeRightIdx = 2 * segmentTreeIdx + 1;

        const leftValue = this.querySegmentTreeLazy(segmentTreeLeftIdx, queryStartIdx, queryEndIdx, actualStartIdx, actualMidIdx);
        const rightValue = this.querySegmentTreeLazy(segmentTreeRightIdx, queryStartIdx, queryEndIdx, actualMidIdx + 1, actualEndIdx);

        return this.operator(leftValue, rightValue);
    }
}