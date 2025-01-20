// Insertion Sort
// Insertion Sort is a simple and intuitive sorting algorithm that builds the sorted portion of the array one element at a time. It places each element in its correct position by shifting the larger elements of the sorted portion to the right.

// How it Works:
// Start with the second element (as the first element is considered sorted).
// Compare it with the elements in the sorted portion.
// Insert it into its correct position by shifting the larger elements one step to the right.
// Repeat this process for all remaining elements.
// Key Points:
// Time Complexity:
// Best case: 𝑂(𝑛) (when the array is already sorted).
// Worst and average case: 𝑂(𝑛2)(when the array is sorted in reverse).
// Space Complexity: 𝑂(1), as it sorts in-place.
// It is stable, meaning it maintains the relative order of equal elements.
// Efficient for small or partially sorted datasets.

function insertionSort(arr){
    let n = arr.length 
    for(let i = 1 ; i<n ; i++){
        let key = arr[i];
        let j = i - 1

        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = key;
    }

    return arr;
}

console.log(insertionSort([4,2,1,5,2,6,2,1]));