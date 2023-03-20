/*
    1. A heap data structure is absed on complete binary tree.
    2. A complete binary tree is a tree where all the levels except the last level is complete 
    filled and in the last level the nodes are placed as left as possible.
    3. The last node can contain 1 to 2 ^ h nodes.
    4. A perfect binary tree is a full binary tree but the vice versa is not true.
    5. There are two types of heaps Max heap and Min heap.
    6. Max heap is where the root is the largest amongst its child nodes and it is recursively
    true for the child nodes. Min heap is where the root is smallest amongst its children and it
    is recursively true for the child nodes.
    7. Operations performed on heap is Heapify, Insert, Delete, Peek.
    8. Heapify is the process with which we convert an imbalanced tree into a balanced heap data 
    structure. It takes O(log N) time.
*/