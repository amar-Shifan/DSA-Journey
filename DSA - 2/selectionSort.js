// Selection Sort
// Selection Sort is a simple sorting algorithm that works by dividing the input array into two parts: the sorted portion and the unsorted portion. It repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted portion and places it at the end of the sorted portion.

// How it Works:
// Start with the first element of the array.
// Search the entire unsorted portion of the array to find the smallest element.
// Swap this smallest element with the first element of the unsorted portion.
// Move the boundary of the sorted portion one element to the right.
// Repeat the process for the remaining unsorted portion until the entire array is sorted.
// Key Points:
// Time Complexity:
// Best, average, and worst case: 𝑂(𝑛2), as it always involves nested loops.
// Space Complexity: 𝑂(1), as it performs sorting in-place.
// It is not stable because swapping may disrupt the relative order of equal elements.
// Simple to implement and suitable for small datasets.

function selectionSort(arr){
    let n = arr.length 

    for(let i = 0 ; i<n -1 ; i++){
        let minIndex = i
        for(let j = i + 1 ; j<n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }

        [arr[i] , arr[minIndex]] = [arr[minIndex] , arr[i]];
    }
    return arr
}

console.log(selectionSort([1,5,3,8,4,2,9,1]));