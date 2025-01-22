// What is a Queue?
// A queue is a linear data structure that follows the FIFO (First In, First Out) principle.
//  It means the element added first to the queue is removed first. It works like a line at a ticket counter,
//   where the person who joins the line first gets served first.

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Queue Underflow');
            return null
        }
        return this.items.shift();
    }

    front(){
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.items[0];
    }

    display(){
        console.log(this.items.join('  <-  '));
    }

    isEmpty(){
        return this.items.length === 0
    }
}


// let queue = new Queue();
// queue.enqueue(10)
// queue.enqueue(50)
// queue.enqueue(1)

// queue.dequeue()
// queue.display()
// console.log(queue.front())


// 1. Implement a Queue Using Stacks

class QueueUsingStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        if (this.stack2.length === 0) {
            console.log("Queue is empty");
            return null;
        }
        return this.stack2.pop();
    }
}

// let queue = new QueueUsingStack();
// queue.enqueue(10)
// queue.enqueue(50)
// queue.enqueue(1)

// console.log('Dequeue :',queue.dequeue())

// function generteBinary(n) {
//     const queue = new Queue();
//     queue.enqueue("1");
//     for (let i = 0; i < n; i++) {
//         const current = queue.dequeue();
//         console.log(current);
//         queue.enqueue(current + "0");
//         queue.enqueue(current + "1");
//     }
// }

// console.log(generteBinary(5))



class QueueToStack{
    constructor(){
        this.queue1 = [];
        this.queue2 = [];
    }

    enqueue(element){
        this.queue1.push(element)
    }

    dequeue(){
        if(this.queue1.length == 0) {
            console.log('stack Underflow')
            return null
        }

        while(this.queue1.length > 1){
            this.queue2.push(this.queue1.shift())
        }
        const poppedElement = this.queue1.shift();
        [this.queue1 , this.queue2] = [this.queue2 , this.queue1]
        return poppedElement

    }

    peek(){
        if(this.queue1.length == 0){
            console.log('Stack is Empty');
        }
        return this.queue1[this.queue1.length - 1];
    }
}

let queue = new QueueToStack();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log('Popped : ' , queue.dequeue());
console.log('Peaked : ',queue.peek())












