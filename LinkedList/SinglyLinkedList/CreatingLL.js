
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        // const newNode={
        //     head:value,
        //     next:null,
        // }
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this
    }
    prepend(value){
        // const newNode ={
        //     head:value,
        //     next:null
        // }
        // instead of above we have created class for common structure and can re-use it like as below.
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const array=[];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode=currentNode.next;
        }
        console.log(array);
        return array;
    }

    insert(index,value){
        if(this.length <index){
            this.append(value);
            return 
        }
        const newNode = new Node(value);
        const position = this.traverseNodes(index-1);
        console.log(position,'pos')
        const holdingNode = position.next;
        position.next = newNode;
        newNode.next = holdingNode;
        this.length ++
    }
    traverseNodes(index){
        let currentNode = this.head
        let currentNodeINdex = 0;
        while (currentNodeINdex !== index) {
            currentNode = currentNode.next;
            currentNodeINdex++;
        }
        return currentNode;
    }
    remove(index){
        let position = this.traverseNodes(index-1)
        let Actualposition = position.next
        console.log(position,'poss',Actualposition)
        position.next = Actualposition.next;
        this.length--;
    }
}

const LList = new LinkedList(10);
LList.append(5);
LList.append(16);
LList.prepend(6);
LList.insert(2,99);     //passing index in between 
LList.insert(7,99);     //passing index with exceed index
LList.printList();
LList.remove(1);
LList.printList();

// console.log(LList);