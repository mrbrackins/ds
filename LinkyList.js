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
    let currentIndex = 0;
    let currentNode = this.head;
while(currentIndex < targetIndex){
    currentNode = currentNode.next;


    currentIndex++

}
console.log(currentNode)
return currentNode;
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
console.log(list)
console.log("***getNodeAt***")
list.getNodeAt(0);

