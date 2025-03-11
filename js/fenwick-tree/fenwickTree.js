class FenwickTree {
    #tree;

    constructor ( input ) {
        if ( !input || !input.length ) throw new Error("Invalid arguments");
        this.#tree = [ undefined, ...input ];
        this.#constructTree();
        console.log(this.#tree);
    }

    #lsb ( index ) {
        return index & -index;
    }

    #constructTree () {
        for ( let i = 1; i < this.#tree.length; i++ ) {
            const nextIndex = i + this.#lsb(i);
            console.log("i = ", i, "nextIndex = ", nextIndex);
            if ( nextIndex < this.#tree.length ) {
                this.#tree[nextIndex] += this.#tree[i];
            }
        }
    }

    #prefixSum ( index ) {
        let sum = 0;
        while ( index > 0 ) {
            sum += this.#tree[index];
            index -= this.#lsb(index);
        }
        return sum;
    }

    sum ( start, end ) {
        if ( end < start || start < 1 || end > this.#tree.length ) throw new Error("Invalid arguments");
        return this.#prefixSum(end) - this.#prefixSum(start - 1); 
    }

    #add ( index, value ) {
        while ( index < this.#tree.length ) {
            this.#tree[index] += value;
            index += this.#lsb(index);
        }
    }

    update ( index, value ) {
        const currValue = this.sum(index, index);
        this.#add(index, value - currValue);
    }
}

const tree1 = new FenwickTree([2, 1, 1, 3, 2, 3, 
    4, 5, 6, 7, 8, 9]);
console.log(tree1.sum(3, 5));