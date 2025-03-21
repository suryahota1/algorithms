var TreeNode = /** @class */ (function () {
    function TreeNode(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
    return TreeNode;
}());
var AVLTree = /** @class */ (function () {
    function AVLTree(comparator) {
        this.root = null;
        this.comparator = comparator;
    }
    AVLTree.prototype.search = function (key, root) {
        if (root === null)
            return null;
        var compareValue = this.comparator(key, root.key);
        if (compareValue === 0)
            return root;
        if (compareValue === -1)
            return this.search(key, root.left);
        return this.search(key, root.right);
    };
    AVLTree.prototype.getHeight = function (node) {
        if (node === null)
            return 0;
        return node.height;
    };
    AVLTree.prototype.getBalanceFactor = function (node) {
        if (node === null)
            return 0;
        var leftHeight = this.getHeight(node.left);
        var rightHeight = this.getHeight(node.right);
        return leftHeight - rightHeight;
    };
    AVLTree.prototype.rightRotate = function (node) {
        var left = node.left;
        var rightOfLeft = left.right;
        node.left = rightOfLeft;
        left.right = node;
        node.height = Math.max(1 + this.getHeight(node.left), this.getHeight(node.right));
        left.height = Math.max(this.getHeight(left.left), 1 + this.getHeight(left.right));
        return left;
    };
    AVLTree.prototype.leftRotate = function (node) {
        var right = node.right;
        var leftOfRight = right.left;
        node.right = leftOfRight;
        right.left = node;
        node.height = Math.max(this.getHeight(node.left), 1 + this.getHeight(node.right));
        right.height = Math.max(1 + this.getHeight(right.left), this.getHeight(right.right));
        return right;
    };
    AVLTree.prototype.balanceInsert = function (key, node) {
        console.log("balanceInsert key", node === null || node === void 0 ? void 0 : node.key, key);
        if (node === null) {
            return new TreeNode(key);
        }
        var compareValue = this.comparator(key, node.key);
        console.log("compareValue", compareValue);
        if (compareValue === 0) {
            return node;
        }
        else if (compareValue === -1) {
            node.left = this.balanceInsert(key, node.left);
        }
        else {
            node.right = this.balanceInsert(key, node.right);
        }
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        var balanceFactor = this.getBalanceFactor(node);
        console.log("balanceFactor is", balanceFactor, " for ", node.key);
        // LL usecase
        if (balanceFactor > 1 && key < node.left.key) {
            return this.rightRotate(node);
        }
        // LR usecase
        if (balanceFactor > 1 && key > node.left.key) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }
        // RR usecase
        if (balanceFactor < -1 && key > node.right.key) {
            return this.leftRotate(node);
        }
        // RL usecase
        if (balanceFactor < -1 && key < node.right.key) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
        return node;
    };
    AVLTree.prototype.insert = function (key) {
        this.root = this.balanceInsert(key, this.root);
    };
    AVLTree.prototype.preOrder = function (node) {
        if (node === void 0) { node = this.root; }
        if (node === null) {
            return;
        }
        console.log(node.key);
        this.preOrder(node.left);
        this.preOrder(node.right);
    };
    return AVLTree;
}());
var avlTreeInst = new AVLTree(function (a, b) { return a - b === 0 ? 0 : (a - b < 0 ? -1 : 1); });
avlTreeInst.insert(10);
avlTreeInst.insert(20);
avlTreeInst.insert(30);
avlTreeInst.insert(40);
avlTreeInst.insert(50);
avlTreeInst.insert(25);
avlTreeInst.preOrder();
