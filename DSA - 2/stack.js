// 1. Stack
// A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. 
// The last element added to the stack is the first one to be removed.

class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.isEmpty()){
            console.log('Stack is empty');
            return null
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            console.log('Stack is empty');
            return null
        }
        return this.items[this.items.length - 1]
    }

    display(){
        console.log('Stack : ' , this.items.join(' -> '))
    }

    isEmpty(){
        return this.items.length === 0
    }
}

// let stack = new Stack();
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display();
// stack.pop();
// console.log(stack.peek())


// Reverse a String 
// function reverse(str){
//     let stack = new Stack();
//     for(let i of str){
//         stack.push(i);
//     }

//     let reversed = '';
//     while(!stack.isEmpty()){
//         reversed += stack.pop()
//     }

//     return reversed
// }

// console.log('Reversed String : ',reverse('hello'))

// Balanced Parenthisis
// function isBalanced(expression){
//     let stack = new Stack()
//     const pairs = {")":"(" , "}":"{" , "]":"["};

//     for(let char of expression){
//         if(["(" , "{" , "["].includes(char)) {
//             stack.push(char)
//         } else if([")" , "}" , "]"].includes(char)){
//             if(stack.pop() !== pairs[char]){
//                 return false
//             }
//         }
//     }
//     return stack.isEmpty()
// }

// console.log(isBalanced("{[()]}"));

// Min Stack 
class minStack{
    constructor(){
        this.stack = []
        this.minStack = []
    }

    push(element){
        this.stack.push(element);
        if (this.minStack.length === 0 || element <= this.getMin()){
            this.minStack.push(element);
        }
    }

    getMin(){
        if(this.minStack.length == 0) return null
        return this.minStack[this.minStack.length - 1]
    }

}

let minstack = new minStack();
minstack.push(10)
minstack.push(30)
minstack.push(1)

console.log(minstack.getMin())