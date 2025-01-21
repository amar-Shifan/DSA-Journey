// Merge Sort
// Merge Sort is a divide-and-conquer sorting algorithm that divides the input array into smaller subarrays, sorts them, and then merges them back together in sorted order. It is particularly efficient for large datasets.

// How it Works:
// Divide: Split the array into two halves recursively until each subarray contains a single element.
// Conquer: Sort and merge the subarrays to produce sorted arrays.
// Combine: Continue merging until a single sorted array is achieved.
// Key Points:
// Time Complexity:
// Best, average, and worst case: 𝑂(𝑛log⁡), as it consistently divides the array and merges.
// Space Complexity: 𝑂(𝑛), because it requires additional space for the temporary arrays during merging.
// It is stable, meaning it maintains the relative order of equal elements.
// It is suitable for linked lists as well as arrays.

function mergeSort(arr) {
    // Base case: arrays with 1 or 0 elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort and merge the two halves
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Merge the two sorted arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}


console.log(mergeSort([1,4,6,2,3,1,7,3,1,2]));