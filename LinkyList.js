class LinkyList {    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }


append(value){
    if(!this.head){
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length++
    }  else {
        // create a new node
        let newNode = new Node(value);
        // make tail.next = new node
        this.tail.next = newNode;
        // make tail new node
        this.tail = newNode;
        this.length++
    }
}

prepend(value){
    if(!this.head){
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length++
    } else {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++

    }



}

getNodeAt(targetIndex){
    if(targetIndex > this.length -1 || targetIndex < 0){
        console.log("out of bounds...")
        return false;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    
while(currentIndex < targetIndex){
    currentNode = currentNode.next;


    currentIndex++

}
// console.log(currentNode)
return currentNode;
}

search(element){
    let currentNode = this.head;
    let currentIndex = 0;
    while(currentIndex < this.length){
        if(currentNode.value == element){
            return currentIndex;
        }
        currentNode = currentNode.next
        currentIndex++
    }
    return -1;
}

deleteAt(index){
    let leftNode = this.getNodeAt(index -1)
    let rightNode = this.getNodeAt(index + 1)
    leftNode.next = rightNode
    
    let nodeToDelete = this.getNodeAt(index)
    let nodeToReturn = nodeToDelete
    nodeToDelete = null;
    this.length--
    return nodeToReturn

}

insertAt(index, value){
    if(index == 0){
        this.prepend(value)
    }
    if(index == (this.length -1)){
        this.append(value)
    }
    let newNode = new Node(value)
    let rightNode = this.getNodeAt(index + 1)
    //connect new node to left's next
    let leftNode = this.getNodeAt(index -1)
    leftNode.next =  newNode;
    //connect this node's next to right
    newNode.next = rightNode;


    
   this.length++
}





    
}

class Node {
        constructor(value){
            this.value = value;
            this.next = null;
        }

}

let list = new LinkyList();
console.log(list)
list.prepend(7)
console.log(list)
list.prepend(8)
console.log(list)
list.append(6)
list.append(5)
console.log("***LIST***")
console.log(list)
console.log("***END LIST***")
console.log("***getNodeAt***")
list.getNodeAt(0);
console.log("***search***")
console.log(list.search(8))
console.log("***deleteAt***")
console.log(list.deleteAt(1))
console.log("***List After Delete***")
console.log(list)
list.insertAt(1, 7)
console.log("***List After Insert***")
console.log(list)

