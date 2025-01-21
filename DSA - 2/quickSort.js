// Quick Sort
// Quick Sort is a highly efficient divide-and-conquer sorting algorithm. It works by selecting a "pivot" element from the array and partitioning the other elements into two subarrays: one with elements smaller than the pivot and one with elements greater than the pivot. The process is then recursively applied to the subarrays.

// How it Works:
// Choose a pivot element (commonly the first, last, or middle element, or chosen randomly).
// Partition the array into:
// Elements smaller than the pivot.
// Elements larger than the pivot.
// Recursively apply the same steps to the subarrays.
// Combine the sorted subarrays and the pivot to form the final sorted array.
// Key Points:
// Time Complexity:
// Best and average case: 𝑂(𝑛log⁡𝑛).
// Worst case: 𝑂(𝑛2) (occurs when the pivot divides the array poorly, e.g., all elements are on one side).
// Space Complexity: 𝑂(log⁡ 𝑛) (due to recursive calls).
// It is not stable, as the relative order of equal elements may change.
// Ideal for large datasets due to its efficiency.

function quickSort(arr){
    if(arr.length <= 1) return arr

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for(let i = 0 ; i<arr.length -1 ; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left) , pivot , ...quickSort(right)];
}

console.log(quickSort([9,3,1,5,7,3,1]));