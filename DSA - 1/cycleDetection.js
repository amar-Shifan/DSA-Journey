class Node {
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    push(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head
            
            while(current.next){
                current = current.next
            }
            current.next = newNode;
        }
    }

    detectCycle(){
        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            if(fast === slow){
                return true
            }
        }
        return false;
    }

    
}

const myList = new LinkedList();

myList.push(10)
myList.push(20)
myList.push(30)

myList.head.next.next.next = myList.head

console.log("Cycle detected:", myList.detectCycle()); 