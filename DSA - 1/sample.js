let arr = [1,2,3,4,1,24,24,9];
let k = 3

function kLargest(arr , k){
    let temp = 0
    for(let i = 0 ; i<arr.length ; i++){
        for(let j = 0 ; j<arr.length ; j++){
            if(arr[i] > arr[j] && i!=j){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    console.log(arr);
    return arr[k - 1];
}

console.log(kLargest(arr , 1))

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    push(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode
        }else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
        return
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
        this.size--
    }

    print(){
        let current = this.head 

        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

let list = new LinkedList()
list.push(10)
list.push(20)
list.push(40)
list.push(30)
list.push(50)

list.middleDelete()
list.print()

function BinarySearch(arr , target){
    let left = 0
    let right = arr.length - 1

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target){
            return mid 
        } else if (arr[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

console.log('Binary :',BinarySearch([1,2,3,4,5,6] , 3))


function fibonacci(num){
    if(num === 0) return 0
    if(num == 1)return 1

    return fibonacci(num-1) + fibonacci(num-2)
}

console.log('fibonacci :',fibonacci(6))