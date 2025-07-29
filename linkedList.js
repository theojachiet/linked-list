import { Node } from "./node";

export class LinkedList {
    construcotr() {
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

        while (temp.nextNode !== null) {
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
            throw new Error('you must enter a positive index');
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

        return new Error('Index out of bounds');
    }

    pop() {
        let temp = this.head;
        let next = temp.nextNode;

        while (next !== null) {
            temp = next;
            next = next.nextNode;
        }

        //last node is not deleted but no reference is pointing to it anymore, the garbagecollector will get it.
        temp.nextNode = null;
    }

    contains(value) {
        let temp = this.head;

        while (temp.nextNode !== null) {
            if (temp.value === value) return true;
            temp = temp.nextNode;
        }

        return false;
    }

    find(value) {
        let temp = this.head;
        let currentIndex = 0;

        while (temp.nextNode !== null) {
            if (temp.value === value) return currentIndex;
            temp = temp.nextNode;
            currentIndex++;
        }

        return null;
    }

    toString() {
        let temp = this.head;
        let str = '';

        while (temp.nextNode !== null) {
            str += `(${temp.value}) -> `;
        }

        str += 'null';
        return str;
    }
}

export class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}