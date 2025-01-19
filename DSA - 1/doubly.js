// Doubly Linked List 
// Reverse Printing

class Node{
    constructor(data){
        this.data = data 
        this.next = null
        this.prev = null
    }
}

class DoublyLL{
    constructor(){
        this.head = null
    }

    push(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return
        }

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;
    }

    printList(){
        let current = this.head;
        while(current.next){
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data)
    }

    reverse(){
        let current  = this.head
        let temp = null

        while(current){
            temp = current.next;
            current.next = current.prev
            current.prev = temp;

            current = current.prev
        }

        if(temp){
            this.head = temp.prev
        }
    }

    reversePrint(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }

        while(current){
            console.log(current.data)
            current = current.prev
        }
    }

}

const myList = new DoublyLL();
myList.push(10)
myList.push(20)
myList.push(30)
myList.push(40)

myList.reversePrint()
myList.printList()