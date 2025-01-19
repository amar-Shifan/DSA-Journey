class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    push(data){
        let newNode = new Node(data);
        
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;

        while(current.next){
            current = current.next;
        }
        
        current.next = newNode;
        newNode.prev = current;
    }

    removeDup(){
        let current = this.head;

        while(current && current.next){
            if(current.data === current.next.data){
                current.next = current.next.next
            }else{
                current = current.next
            }
        }
    }

    isPalindrome(){
        if(!this.head || !this.head.next) return true;

        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        let reversed = this.reverse(slow);

        let firstHalf = this.head;
        let secondHalf = reversed
        let isPalindrome = true

        while(secondHalf){
            if(firstHalf.data !== secondHalf.data){
                isPalindrome = false
                break;
            }

            firstHalf = firstHalf.next
            secondHalf = secondHalf.next
        }
        this.reverse(reversed);

        return isPalindrome
        
    }

    reverse(head = this.head){
        let prev = null
        let current = head

        while(current){
            let nextNode = current.next
            current.next = prev
            prev = current
            current = nextNode
        }

        this.head = prev

        return prev
    }

    printReverse(){
        let current = this.head;
        while(current.next){
            current = current.next
        }

        while(current){
            console.log(current.data);
            current = current.prev
        }
    }

    print(){
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }


}

const myList = new LinkedList()
myList.push(10)
myList.push(10)
myList.push(20)
myList.push(20)
myList.push(20)
myList.push(10)
myList.push(10)

//Print all elements by order & reverse by order
myList.printReverse()
console.log(myList)

// Write a program to remove duplicates in a sorted singly linked list
myList.removeDup()
myList.print()

//Code for Reversing a Singly Linked List:
myList.reverse();
myList.print();


// Ispalindrome or not 
let result = myList.isPalindrome();
console.log('ispalindrome' , result);

myList.print();

// Linked List Reversal.

