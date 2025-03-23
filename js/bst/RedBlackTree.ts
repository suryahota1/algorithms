type RBNodeOrNull<T> = RedBlackNode<T> | typeof NIL;

const COLOR_BLACK = "BLACK";
const COLOR_RED = "RED";

type Color = typeof COLOR_BLACK | typeof COLOR_RED;



type Comparator<T> = ( a: T, b: T) => -1 | 0 | 1;

class RedBlackNode<T> {
    private key: T;
    private color: Color;
    private left: RBNodeOrNull<T>;
    private right: RBNodeOrNull<T>;
    private parent: RBNodeOrNull<T>;

    constructor ( key: T, color: Color ) {
        this.key = key;
        this.color = color;
        this.left = NIL;
        this.right = NIL;
        this.parent = NIL;
    }

    getKey (): T {
        return this.key;
    }

    getLeft (): RBNodeOrNull<T> {
        return this.left;
    }

    setLeft ( left: RBNodeOrNull<T> ): void {
        this.left = left;
    }

    getRight (): RBNodeOrNull<T> {
        return this.right;
    }

    setRight ( right: RBNodeOrNull<T> ): void {
        this.right = right;
    }

    getParent (): RBNodeOrNull<T> {
        return this.parent;
    }

    setParent ( parent: RBNodeOrNull<T> ): void {
        this.parent = parent;
    }

    getColor (): Color {
        return this.color;
    }

    setColor ( color: Color): void {
        this.color = color;
    }
}

const NIL = new RedBlackNode(undefined, COLOR_BLACK);

class RedBlackTree<T> {
    root: RBNodeOrNull<T> | typeof NIL;
    comparator: Comparator<T>;

    constructor ( comparator: Comparator<T> ) {
        this.root = NIL;
        this.comparator = comparator;
    }

    private leftRotate ( y: RBNodeOrNull<T> ) {
        const parentOfy = y.getParent();
        const x: RBNodeOrNull<T> = y.getRight();
        const leftOfx = x.getLeft();

        if ( y === parentOfy.getLeft() ) {
            parentOfy.setLeft(x);
        } else {
            parentOfy.setRight(x);
        }
        
        x.setParent(parentOfy);
        y.setRight(leftOfx);
        leftOfx.setParent(y);
    }

    private rightRotate ( y: RBNodeOrNull<T> ) {
        const parentOfy = y.getParent();
        const x: RBNodeOrNull<T> = y.getLeft();
        const rightOfx = x.getRight();

        if ( y === parentOfy.getLeft() ) {
            parentOfy.setLeft(x);
        } else {
            parentOfy.setRight(x);
        }
        x.setParent(parentOfy);
        y.setRight(rightOfx);
        rightOfx.setParent(y);
    }

    private insertFix ( node: RBNodeOrNull<T> ) {
        while ( node.getParent().getColor() === COLOR_RED ) {
            const grandParent = node.getParent().getParent();
            const isParentLeftChild = grandParent.getLeft() === node.getParent();
            if ( isParentLeftChild ) {
                const uncle = grandParent.getRight();
                if ( uncle && uncle.getColor() === COLOR_RED ) {
                    node.getParent().setColor(COLOR_BLACK);
                    uncle.setColor(COLOR_BLACK);
                    grandParent.setColor(COLOR_RED);
                    node = grandParent;
                } else {
                    const isCurrNodeRightChild = node === node.getParent().getRight();
                    if ( isCurrNodeRightChild ) {
                        // Left rotate parent
                        node = node.getParent();
                        this.leftRotate(node.getParent());
                    }
                    node.getParent().setColor(COLOR_BLACK);
                    node.getParent().getParent().setColor(COLOR_RED);
                    this.rightRotate(node.getParent().getParent());
                }
            } else {
                const uncle = grandParent.getLeft();
                if ( uncle && uncle.getColor() === COLOR_RED ) {
                    node.getParent().setColor(COLOR_BLACK);
                    uncle.setColor(COLOR_BLACK);
                    grandParent.setColor(COLOR_RED);
                    node = grandParent;
                } else {
                    const isCurrNodeLeftChild = node === node.getParent().getLeft();
                    if ( isCurrNodeLeftChild ) {
                        // Left rotate parent
                        node = node.getParent();
                        this.rightRotate(node.getParent());
                    }
                    node.getParent().setColor(COLOR_BLACK);
                    node.getParent().getParent().setColor(COLOR_RED);
                    this.leftRotate(node.getParent().getParent());
                }
            }
            
        }
        this.root.setColor(COLOR_BLACK);
    }

    insert ( key: T ): boolean {
        if ( key === null ) throw new Error("Invalid input");

        let parent = this.root;
        let z: RBNodeOrNull<T> | null = null;
        const newNode = new RedBlackNode(key, COLOR_RED);
        while ( parent !== NIL ) {
            const compareValue = this.comparator(key, parent.getKey()!);
            if ( compareValue === 0 ) {
                // Same value can not be inserted again
                return false;
            } else if ( compareValue === -1 ) {
                z = parent;
                parent = parent.getLeft();
            } else {
                z = parent;
                parent = parent.getRight();
            }
        }

        if ( z === null ) {
            this.root = newNode;
        }
        this.insertFix(newNode);

        return true;
    }
}