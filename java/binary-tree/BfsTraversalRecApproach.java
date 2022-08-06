class Node {
    int key;
    Node left, right;
    public Node ( int item ) {
        key = item;
        left = right = null;
    }
}

class TreeTraversal {
    Node root;
 
    public TreeTraversal () {
        root = null;
    }

    int getTreeHeight ( Node node ) {
        if ( node == null ) {
            return 0;
        }

        int lHeight = getTreeHeight(node.left);
        int rHeight = getTreeHeight(node.right);

        if ( lHeight >= rHeight ) {
            return lHeight + 1;
        } else {
            return rHeight + 1;
        }
    }

    void printLevelOrder () {
        int height = getTreeHeight(root);
        for ( int i = 1; i < height; i++ ) {

        }
    }

    void printCurrentLevel ( Node node, int level ) {
        if ( node == null ) {
            return;
        }
        if ( level == 1 ) {
            System.out.print(node.key);
        } else if ( level > 1 ) {
            printCurrentLevel(node.left, level - 1);
            printCurrentLevel(node.right, level - 1);
        }

    }

    public static void main ( String [] args ) {
        System.out.println("Hi");

        TreeTraversal tree = new TreeTraversal();
        tree.root= new Node(1);
        tree.root.left= new Node(2);
        tree.root.right= new Node(3);
        tree.root.left.left= new Node(4);
        tree.root.left.right= new Node(5);

        tree.printLevelOrder();
    }
}