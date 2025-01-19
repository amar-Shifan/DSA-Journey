// class Node {
//     constructor(data){
//         this.data = data 
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//     }

//     push(data){
//         const newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode
//         }else {
//             let current = this.head;
//             while(current.next){
//                 current = current.next;
//             }
//             current.next = newNode
//         }
//     }

//     printList(){
//         let current = this.head;
//         while(current){
//             console.log(current);
//             current = this.next
//         }
//     }
// }

// const myList = new LinkedList();

// myList.push(10);
// myList.push(20);
// myList.push(30);

// myList.printList();

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);

        if (!this.head) { 
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode; 
        }

        this.size++;
    }

    pop() {
        if (!this.head) return null; 
    
        if (this.head === this.tail) { 
            const removedNode = this.head;
            this.head = this.tail = null; 
            this.size--;
            return removedNode.data;
        }
    
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
    
        const removedNode = this.tail; 
        current.next = null; 
        this.tail = current; 
        this.size--;
        return removedNode.data; 
    }

    unshift(data){
        let newNode = new Node(data);
        if(!this.head) {
            this.head = this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    shift(){
        if(!this.head) return null
        let shifted = this.head
        this.head = this.head.next;
        if(!this.head) return this.tail = null
        this.size--
        return shifted.data
    }

    deleteSpecific(val){
        if(!this.head) return null;
        if(this.head.data === val) {
            this.head = this.head.next
            this.size--
            return 
        }

        let current = this.head 
        while(current.next && current.next !== val){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next
        }
        this.size--;
    }

    after(x , data){
        if(!this.head) return 

        let current = this.head

        while(current){
            if(current.data === x){
                let newNode = new Node(data);
                newNode.next = current.next 
                current.next = newNode
                this.size++
                return;
            }
            current = current.next
        }
    }

    before(x , data){
        if(!this.head) return

        if (this.head.data === x) {
            this.unshift(data);
            return;
        }

        let current = this.head

        while(current.next){
            if(current.next.data === x){
                const newNode = new Node(data);
                newNode.next = current.next;
                current = newNode; 
                this.size++
                return;
            }
            current = current.next;
        }
    }

    reverse (head = this.head){
        let current = head
        let prev = null

        while(current){
            let newNode = current.next
            current.next = prev
            prev = current
            current = newNode
        }
        
        this.head = prev

    }

    middle(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next 
            fast = fast.next.next
        }

        console.log('middleElemet:' , slow.data);
    }

    removedup(){
        let current = this.head;

        while(current && current.next){
            if(current.data === current.next.data){
                current.next = current.next.next
                this.size--;
            }else{
                current = current.next
            }
        }

    }

    middleDelete(){
        let slow = this.head
        let fast = this.head 
        let prev = null

        while(fast && fast.next){
            prev = slow
            slow = slow.next 
            fast = fast.next.next
        }

        prev.next = slow.next
        this.size--;
    }

    palindrome(){
        if(!this.head || !this.head.next) return true

        let slow = this.head 
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next 
            fast = fast.next.next
        }

        let secondHalf = this.reverse(slow);

        let firstHalf = this.head
        let temp = secondHalf;

        while(secondHalf){
            if(firstHalf.data !== secondHalf.data){
                this.reverse(temp)
                return false
            }
            firstHalf = firstHalf.next
            secondHalf = secondHalf.next
        }

        this.reverse(temp)

        return true
    }
    

    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

// let arr = [1,2,3,4,5,6]

// function arrTo(arr){
//     let myList = new LinkedList()
//     arr.forEach(element => {
//         myList.push(element)
//     });
//     return myList
// }

// const arrToLL = arrTo(arr)
// arrToLL.print()

let myList = new LinkedList();

myList.push(10)
myList.push(15)
myList.push(15)
myList.push(20)
myList.push(25)
console.log('Shifted : ',myList.shift())
// console.log('Popped',myList.pop())
myList.print()

// myList.middleDelete();
// myList.unshift(5)
// myList.deleteSpecific(10)
// myList.middle()

// myList.after(15 , 20)
// myList.print()
// console.log('---------')
// myList.before(15 , 15)
// myList.removedup()
// // myList.reverse()
// console.log(myList.palindrome())


