/*
    The individual content of Linkedlist is node. So, for every operation (access, insert, look up or delete) to be carried out in linkedlist, such requires a node. So, it is always necesaary to create a node.

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {

    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  
  removeTail() {

    if (!this.tail) {
      return false;
    }

    const poppedNode = this.tail;

    if (this.head !== this.tail) {

      const newTail = this.getNodeAtIndex(this.length - 2);

      newTail.next = null;
      this.tail = newTail;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return poppedNode;
  }

  prepend(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  removeHead() {

    if (!this.head) return false;

    const shiftedNode = this.head;

    const newHead = this.head.next;

    if (!newHead) {
      this.tail = newHead;
    }

    this.head = newHead;

    this.length--;
    return shiftedNode;
  }

  
  getNodeAt(index) {

    if (index >= this.length || index < 0) return null;

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }


  insertAt(index, val) {

    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return this.prepend(val);
    }

    if (index === this.length) {
      return this.append(val);
    }


    const newNode = new Node(val);
    const after = this.getNodeAtIndex(index);
    const before = this.getNodeAtIndex(index - 1);
    newNode.next = after;
    before.next = newNode;

    this.length++;
    return this;
  }


    access(index){

      let counter = 0;
      let currentNode = this.head;
      while(counter < this.length){

          if(counter === index){
              return currentNode.value;
          }
          currentNode = this.head.next;
          counter++;
      }
  }

  search(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter < index){

        currentNode = currentNode.next;
        counter++;
    }
    return currentNode;
  }

  removeAt(index) {
    
    if (index < 0 || index >= this.length) {
      return false;
    }
    
    if (index === 0) return this.removeHead();
    
    if (index === this.length - 1) return this.removeTail();
    
    const before = this.getNodeAtIndex(index - 1);
    const removedNode = this.getNodeAtIndex(index);
    before.next = removedNode.next;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }
}

var mySinglyLinkedList = new SinglyLinkedList();

mySinglyLinkedList.append(45);
mySinglyLinkedList.append(50);
mySinglyLinkedList.append(75);
mySinglyLinkedList.append(25);
console.log(mySinglyLinkedList);
mySinglyLinkedList.insertAt(0, 7);
console.log(mySinglyLinkedList);
mySinglyLinkedList.removeAt(0);
console.log(mySinglyLinkedList);
mySinglyLinkedList.removeTail();
console.log(mySinglyLinkedList);
