class DisjointSet {
    parent;
    constructor ( n ) {
        this.parent = [];
        for ( let i = 0; i <= n; i++ ) {
            this.parent.push(-1);
        }
    }
    checkIfUnoccupied ( index ) {
        return this.parent[index] === -1;
    }
    find ( index ) {
        if ( this.parent[index] === index ) return index;
        return this.parent[index] = this.find(this.parent[index]);
    }
    union ( u, v ) {
        const ulp_u = this.find(u);
        const ulp_v = this.find(v);
        if ( ulp_u < ulp_v ) {
            this.parent[ulp_v] = ulp_u;
        } else {
            this.parent[ulp_u] = ulp_v;
        }
    }
    markOccupied ( index ) {
        if ( this.parent[index] === -1 ) this.parent[index] = index;
        if ( index + 1 < this.parent.length && this.parent[index + 1] !== -1 ) {
            this.union(index, index + 1);
        }
        if ( index - 1 >= 0 && this.parent[index - 1] !== -1 ) {
            this.union(index, index - 1);
        }
    }
}
class Solution29 {
    jobSequencing(deadline, profit) {
        const profitWithDeadline = profit.map((value, index) => [value, deadline[index]]);
        profitWithDeadline.sort((a, b) => b[0] - a[0]);
        const days = Math.max(...deadline);
        const answer = new Array(days + 1).fill(-1);
        let count = 0, maxProfit = 0;
        // console.log(profitWithDeadline);
        const ds = new DisjointSet(profit.length);
        for ( const [ profitVal, deadlineVal ] of profitWithDeadline ) {
            console.log("profitVal", profitVal);
            console.log("deadlineVal", deadlineVal);
            const isAvailable = ds.checkIfUnoccupied(deadlineVal);
            console.log("isAvailable", isAvailable);
            if ( isAvailable ) {
                answer[deadlineVal] = profitVal;
                count++;
                ds.markOccupied(deadlineVal);
            } else {
                const lastOccupied = ds.find(deadlineVal);
                console.log("lastOccupied", lastOccupied);
                if ( lastOccupied > 1 ) {
                    answer[lastOccupied - 1] = profitVal;
                    count++;
                    ds.markOccupied(lastOccupied - 1);
                }
            }
            console.log("----------------", answer);
        }
        // console.log(answer);
        return [
            count,
            answer.reduce((acc, curr) => acc + (curr === -1 ? 0 : curr), 0)
        ];
    }
}

const sol29 = new Solution29();
console.log(sol29.jobSequencing([2, 1, 2, 1, 1], [100, 19, 27, 25, 15]));