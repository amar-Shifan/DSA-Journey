// Binary Search 
// Binary Search is an efficient search algorithm that works on sorted arrays. 
// It divides the array into halves to locate the target value.

// Working
// Start with the entire sorted array.
// Find the middle element.
// Compare the middle element with the target:
// If the middle element is equal to the target, return its index.
// If the target is smaller, search in the left half.
// If the target is larger, search in the right half.
// Repeat the process until the target is found or the search space is empty.

// Time Complexity:
// Best Case: O(1) → Target is found at the middle index.
// Worst Case: O(log n) → The search space is reduced by half with each step.

// Questions 
// Find the First and Last Occurrence of a Target
// Find the Square Root of a Number 
// Find the Peak Element in an Array

function BinarySearch(arr , target){
    
    let left = 0 
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(arr[mid] === target){
            return mid
        }else if(arr[mid] < target){
            left = mid + 1
        }else {
            right = mid -1
        }
    }

    return -1
}

console.log(BinarySearch([5,5,5,7],5))

// function Occurrence(arr , target){
//     let first = BinarySearch(arr , target);
//     console.log(first)
//     let last = first;
    
//     while(arr[last + 1] == target){
//         last++
//     }
//     return {first , last}
// }

// console.log(Occurrence([1,2,5,5,5,7],5))

// function squareRoot(num){
//     let left = 0 
//     let right = num

//     while(left <= right){
//         let mid = Math.floor((left + right)/2);
//         let square = mid * mid
//         if(square === num){
//             return mid
//         }else if(square < num){
//             left = mid + 1
//         }else {
//             right = mid - 1
//         }
//     }

//     return right;
// }

// console.log(squareRoot(16))

// function findPeak(arr) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left < right) {
//       let mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] > arr[mid + 1]) {
//         right = mid;  // Peak is in the left half
//       } else {
//         left = mid + 1;  // Peak is in the right half
//       }
//     }
  
//     return arr[left];
//   }
  
//   console.log(findPeak([1, 3, 7, 8, 5, 4, 2]));
