// Heap Sort
// Heap Sort is a comparison-based sorting algorithm that uses a binary 
// heap (Min Heap or Max Heap) to sort elements in O(n log n) time.
function heapSort(arr) {
    let n = arr.length;
  
    // Step 1: Build a Max Heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Step 2: Extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
      // Swap root (max element) with the last element
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // Heapify the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
}

const arr = [12, 11, 13, 5, 6, 7];
// console.log("Sorted Array:", heapSort(arr));


// Descending 
function heapSortDescending(arr) {
    return heapSort(arr).reverse();
}

const array2 = [20, 5, 17, 8, 1];
// console.log("Sorted Descending:", heapSortDescending(array2));



//Sorting Large Random Numbers
const array3 = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log("Unsorted:", array3);
console.log("Sorted:", heapSort([...array3]));


