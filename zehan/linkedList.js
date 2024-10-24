class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Append: Insert a new node at the end of the linked list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Prepend: Insert a new node at the beginning of the linked list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete: Remove the first occurrence of a node with the given data
    delete(data) {
        if (!this.head) {
            return; // List is empty
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Search: Find the first occurrence of a node with the given data
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true; // Data found
            }
            current = current.next;
        }
        return false; // Data not found
    }

    // Print: Display the elements of the linked list
    print() {
        let current = this.head;
        const elements = [];
        while (current !== null) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}
