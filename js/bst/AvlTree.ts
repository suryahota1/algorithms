type Comparator<T> = (a: T, b: T) => -1 | 0 | 1;
type BSTNode<T> = TreeNode<T> | null;

class TreeNode<T> {
    key: T;
    left: BSTNode<T>;
    right: BSTNode<T>;
    height: number;

    constructor ( key: T ) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree<T> {
    root: BSTNode<T>;
    comparator: Comparator<T>;

    constructor ( comparator: Comparator<T> ) {
        this.root = null;
        this.comparator = comparator;
    }

    search ( key: T, root: BSTNode<T> ): BSTNode<T> {
        if ( root === null ) return null;
        const compareValue = this.comparator(key, root.key);
        if (  compareValue === 0 ) return root;
        if ( compareValue === -1 ) return this.search(key, root.left);
        return this.search(key, root.right);
    }

    private getHeight ( node: BSTNode<T> ): number {
        if ( node === null ) return 0;
        return node.height;
    }

    private getBalanceFactor ( node: BSTNode<T> ): number {
        if ( node === null ) return 0;
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        return leftHeight - rightHeight;
    }

    private rightRotate ( node: TreeNode<T> ): TreeNode<T> {
        const left = node.left!;
        const rightOfLeft = left.right;

        node.left = rightOfLeft;
        left.right = node;

        node.height = Math.max(1 + this.getHeight(node.left), this.getHeight(node.right));
        left.height = Math.max(this.getHeight(left.left), 1 + this.getHeight(left.right));

        return left;
    }

    private leftRotate ( node: TreeNode<T> ): TreeNode<T> {
        const right = node.right!;
        const leftOfRight = right.left;

        node.right = leftOfRight;
        right.left = node;

        node.height = Math.max(this.getHeight(node.left), 1 + this.getHeight(node.right));
        right.height = Math.max(1 + this.getHeight(right.left), this.getHeight(right.right));

        return right;
    }

    private balanceInsert ( key: T, node: BSTNode<T> ): TreeNode<T> {
        console.log("balanceInsert key", node?.key, key);
        if ( node === null ) {
            return new TreeNode(key);
        }
        const compareValue = this.comparator(key, node.key);
        console.log("compareValue", compareValue);
        if ( compareValue === 0 ) {
            return node;
        } else if ( compareValue === -1 ) {
            node.left = this.balanceInsert(key, node.left);
        } else {
            node.right = this.balanceInsert(key, node.right);
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        const balanceFactor = this.getBalanceFactor(node);

        console.log("balanceFactor is", balanceFactor, " for ", node.key);
        // LL usecase
        if ( balanceFactor > 1 && key < node.left!.key ) {
            return this.rightRotate(node);
        }

        // LR usecase
        if ( balanceFactor > 1 && key > node.left!.key ) {
            node.left = this.leftRotate(node.left!);
            return this.rightRotate(node);
        }

        // RR usecase
        if ( balanceFactor < -1 && key > node.right!.key ) {
            return this.leftRotate(node);
        }

        // RL usecase
        if ( balanceFactor < -1 && key < node.right!.key ) {
            node.right = this.rightRotate(node.right!);
            return this.leftRotate(node);
        }

        return node;
    }

    insert ( key: T ): void {
        this.root = this.balanceInsert(key, this.root);
    }

    preOrder ( node: BSTNode<T> = this.root ) {
        if ( node === null ) {
            return;
        }
        console.log(node.key);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}


const avlTreeInst = new AVLTree<number>((a, b) => a - b === 0 ? 0 : (a - b < 0 ? -1 : 1));

avlTreeInst.insert(10);
avlTreeInst.insert(20);
avlTreeInst.insert(30);
avlTreeInst.insert(40);
avlTreeInst.insert(50);
avlTreeInst.insert(25);

avlTreeInst.preOrder();