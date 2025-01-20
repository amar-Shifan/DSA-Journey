// Bubble Sort
// Bubble Sort is a simple comparison-based sorting algorithm that works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. The process continues until the entire list is sorted.

// How it works:

// Start from the first element of the array.
// Compare it with the next element.
// If the current element is greater than the next, swap them.
// Repeat this process for each pair of adjacent elements.
// After one full pass, the largest element will have "bubbled up" to its correct position at the end.
// Repeat the process for the rest of the array (excluding the sorted elements) until no swaps are needed.
// Key Points:

// - It has a time complexity of 
// 𝑂(n^2) in the worst and average cases, making it inefficient for large datasets.
// - It is stable, meaning it maintains the relative order of equal elements.
// - Easy to implement and understand.

function bubbleSort(arr){
    let n = arr.length 

    for(let i = 0 ; i < n - 1; i++){
        for(j = 0 ; j< n-i-1 ; j++){
            if(arr[j] > arr[j+1]){
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
            }
        }
    }

    return arr
}

console.log(bubbleSort([6,3,1,6,2,4,1]))