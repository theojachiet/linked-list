import { Node } from "./node";

export class LinkedList {
    construcotr () {
        this.head = null; 
    }

    prepend(value) {
        this.head = new Node(value, this.head);
    }

    append(value) {
        if (this.head == null)
            this.prepend(value);
        else {
            let temp = this.head;
            
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }

            temp.nextNode = new Node(value, null);
        }
    }

    size() {
        let count = 0;
        let temp = this.head;

        while(temp.nextNode !== null) {
            temp = temp.nextNode;
            count++;
        }

        return count;
    }

    tail() {
        let temp = this.head;

        while (temp.nextNode !== null) {
            temp = temp.nextNode;
        }

        return temp;
    }

    at(index) {
        if (index < 0) {
            throw new Error ('you must enter a positive index');
        }
        
        let currentIndex = 0;
        let temp = this.head;

        while (temp.nextNode !== null) {
            if (currentIndex === index) {
                return temp;
            }
            currentIndex++;
            temp = temp.nextNode;
        }

        return new Error('Ibndex out of bounds');
    }
}

export class Node {
    constructor (value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}