// class stack{
//     constructor(){
//         this.items = []
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//         if(this.items.length === 0){
//             console.log('Stack is in underflow');
//             return null
//         }

//     }
// }

// class Queue{
//     constructor(){
//         this.queue = []
//     }

//     enqueue(element){
//         this.queue.push(element)
//     }

//     dequeue(){
//         if(this.queue.length == 0){
//             console.log('queue in underflow')
//             return null
//         }

//         return this.queue.shift()
//     }

//     display(){
//         console.log(this.queue.join(' <- '))
//     }
// }

function selectionSort(arr){
    for(let i = 0 ; i<arr.length ; i++){
        let minIndex = i
        for(let j = i + 1 ; j<arr.length ; j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j
            }
        }

        [arr[minIndex] , arr[i]] = [arr[i] , arr[minIndex]]
    }
    return arr
}

console.log('selection ',selectionSort([3,21,5,3,2]))

function quickSort(arr){
    if(arr.length <= 1) return arr

    let pivot = arr[arr.length - 1];
    let left = []
    let right = []

    for(let i = 0 ; i<arr.left ; i++){
        if(arr[i] < arr[pivot]){
            left.push()
        }
    }

    return [...quickSort(left) , pivot , ...quickSort(right)];
}

console.log('quick : ', quickSort([3,21,5,3,1]))

function mergeSort(arr){
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0 , mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left) , mergeSort(right))
}

function merge(left ,right){

    let result = []
    let i = 0, j = 0

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++
        } else {
            result.push(right[j]);
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}

console.log('merge : ' , mergeSort([4,31,2,1]))