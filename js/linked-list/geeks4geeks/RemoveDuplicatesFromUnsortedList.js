const LinkedList = require("./LinkedList");
const MergeSortList = require("./MergeSortList");
const RemoveDuplicatesFromSortedList = require("./RemoveDuplicatesFromSortedList");

class RemoveDuplicatesFromUnsortedList extends RemoveDuplicatesFromSortedList {

    constructor () {
        super();
    }

    removeDups () {
        const ms = new MergeSortList().mergeSort(this.head);
        console.log("ms ------", ms);
        this.head = ms;
        this.removeDuplicates();
    }
}

const ll = new RemoveDuplicatesFromUnsortedList();
ll.createList();
ll.printList();
ll.removeDups();
ll.printList();