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
        this.length++
       return  this.prepend(value)
    }
    if(index == (this.length -1)){
        this.length++
       return  this.append(value)
    }
    let newNode = new Node(value)
    let rightNode = this.getNodeAt(index) //5's next is null
    console.log('right node: ')
    console.log(rightNode)
    //connect new node to left's next
    let leftNode = this.getNodeAt(index -1) // 7
    leftNode.next =  newNode;
    //connect this node's next to right
    newNode.next = rightNode;


    
   this.length++
}
removeHead(){
let removedHead = this.head
let newHead = this.head.next
this.head = newHead
this.length--

return removedHead
}

print(){
    if(this.length == 0){
        return "empty list"
    }
    let currentIndex = 0
    let currentNode = this.head
    while(currentIndex < this.length ){
        // console.log("currentNode: ", currentNode)
        console.log(currentNode.value)
        currentNode = currentNode.next
        currentIndex++
    }
    return ""
    
}

removeTail(){
let newTail = this.getNodeAt(this.length - 2);
this.tail = newTail
this.tail.next = null
this.length--
console.log(this)
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
list.prepend(8)
console.log(list)

list.print()
list.append(6)
list.append(5)
console.log("865?")
list.print()

list.insertAt(1, 7)
console.log("***List After Insert***")
console.log(list)
console.log(list.print())

console.log('removed head')
list.removeHead()
console.log(list)
console.log(list.print())
console.log('removed tail')
list.removeTail()
console.log(list.print())
console.log(list)

