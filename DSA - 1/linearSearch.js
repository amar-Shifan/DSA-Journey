// Linear Search 
// sequential search algorithm that looks for an element in a list by checking each element one by one.

// How Linear Search Works:
// Start from the first element of the array.
// Compare each element with the target value.
// If the target value is found, return its index.
// If the target value is not found after traversing the entire array, return -1.

// Questions?
// Find the First Occurrence of a Target
// Find the Maximum Value in an Array
// Count the Occurrence of a Target Value

function findTheIndex(arr , target){
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]=== target){
            return i 
        }
    }
    return -1
}

function maximumVal(arr){
    let max = -Infinity;
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

function Occurrence(arr , target){
    let count = 0
    arr.forEach(element => {
       if(element === target){
        count++
       } 
    });
    return count
}

console.log(findTheIndex([1,2,3,4,5],1));
console.log(maximumVal([1,2,3,4,5]))
console.log(Occurrence([1,2,3,1,4,5],1))