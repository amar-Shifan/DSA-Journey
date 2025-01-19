// Questions 
// Convert Array to Linked List
class Node {
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class SinglyLL{
    constructor(){
        this.head = null
    }

    removeDup(){
        let current = this.head;

        while(current && current.next){
            if(current.data === current.next.data){
                current.next = current.next.next;
            }else{
                current = current.next
            }
        }
    }

    // Insert Data Before x Value
    insertBefore(x , data){
        if(!this.head) return

        if (this.head.data === x) {
            this.addNodeAtBeginning(data);
            return;
        }

        let current = this.head

        while(current.next){
            if(current.next.data === x){
                const newNode = new Node(data);
                newNode.next = current.next;
                current = newNode; 
                return;
            }
            current = current.next;
        }
        console.log('not found')
    }

    // Insert Data After x Value
    insertAfter(x , data){
        let current = this.head;

        while(current){
            if(current.data === x){
                let newNode = new Node(data);
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next
        }
        console.log('node with provided value is not found')
    }

    // Insert At the End
    push(data){
        let newNode = new Node(data);
        let current = this.head;

        if(!this.head){
            this.head = newNode
            return
        }

        while(current.next){
            current = current.next
        }
        current.next = newNode;
    }

    // Insert At the Beginning
    addNodeAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Delete a specific val
    deleteByValue(val){
        if(!this.head) return;

        if(this.head.data === val){
            this.head = this.head.next
            return
        }
        
        let current = this.head;
        if(current.next && current.next.data !== val){
            current = current.next;
        }

        if(current.next){
            current.next = current.next.next;
        }

    }

    list(){
        let current = this.head ;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

// Array to linked list function 
function arrayToLinkedList(arr){
    let myList = new SinglyLL();
    arr.forEach(element => {
        myList.push(element);
    });

    return myList;
}

const arr = [1,2,3,4,5];

const res = arrayToLinkedList(arr)
console.log('Array to linkedList');

res.list();
// console.log(res , '--------------------------------');

// Add Node at the Beginning 
res.addNodeAtBeginning(300);
res.addNodeAtBeginning(30);
console.log('Adding at Beginning');

res.list()

// Deleting By Value
console.log('Deleting By Value');
res.deleteByValue(300)
res.deleteByValue(30)
res.list()

// Insert After x value
console.log('Inserting after specific value')
res.insertAfter(3 , 3)
res.list()

// insert Before x value 
console.log('insert before')
res.insertBefore(4,4)
res.list()

// Deleting Duplicates
console.log('Deleted Dup');

res.removeDup()
res.list()

