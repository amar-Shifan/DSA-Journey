// A heap is a specialized tree-based data structure that satisfies the heap property. 
// Heaps are commonly used to implement priority queues, where the highest (or lowest) priority element is always at the root.

// There are two main types of heaps:

// Min Heap: The parent node is always less than or equal to its child nodes.

// Max Heap: The parent node is always greater than or equal to its child nodes.

// Heaps are typically implemented as binary heaps, which are complete binary trees. 
// This means that all levels of the tree are fully filled except possibly the last level, which is filled from left to right.

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Get parent index
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Get left child index
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    // Get right child index
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Swap two elements in the heap
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    // Insert a value into the heap
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    // Heapify up (to maintain heap property after insertion)
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // Remove and return the minimum element (root)
    remove() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      let min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return min;
    }
  
    // Heapify down (to maintain heap property after removal)
    heapifyDown() {
      let index = 0;
      while (this.getLeftChildIndex(index) < this.heap.length) {
        let smallerChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
          smallerChildIndex = rightChildIndex;
        }
  
        if (this.heap[index] > this.heap[smallerChildIndex]) {
          this.swap(index, smallerChildIndex);
          index = smallerChildIndex;
        } else {
          break;
        }
      }
    }
  
    // // Build heap from an array
    buildHeap(array) {
      this.heap = array;
      for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
        this.heapifyDownFromIndex(i);
      }
    }
  
    // Helper function to heapify down from a given index
    heapifyDownFromIndex(index) {
      while (this.getLeftChildIndex(index) < this.heap.length) {
        let smallerChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
          smallerChildIndex = rightChildIndex;
        }
  
        if (this.heap[index] > this.heap[smallerChildIndex]) {
          this.swap(index, smallerChildIndex);
          index = smallerChildIndex;
        } else {
          break;
        }
      }
    }
  
    // Print the heap
    print() {
      console.log(this.heap);
    }
}

let mHeap = new MinHeap();
// mHeap.insert(10)
// mHeap.insert(5)
// mHeap.insert(25)
// mHeap.insert(20)
const array = [3, 1, 6, 5, 2, 4];
const minHeap2 = new MinHeap();
minHeap2.buildHeap(array);
minHeap2.print();

// mHeap.print()

class MaxHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index){
        return 2 * index + 1 
    }

    getRightChildIndex(index){
        return 2 * index + 2 
    }

    swap(i , j){
        [this.heap[i] , this.heap[j]] = [this.heap[j] , this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp() {
        let index = this.heap.length - 1
        while(index > 0){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex] < this.heap[index]) {
                this.swap(parentIndex , index)
                index = parentIndex
            } else {
                break;
            }
        }
    }

    remove() {
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown();
        return max;
    }

    heapifyDown() {
        let index = 0
        while(this.getLeftChildIndex(index) < this.heap.length) {
            let largestChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);
            
            if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestChildIndex]){
                largestChildIndex = rightChildIndex
            }

            if(this.heap[index] < this.heap[largestChildIndex]){
                this.swap(index , largestChildIndex);
                index = largestChildIndex
            } else {
                break;
            }

        }
    }

    print() {
        console.log(this.heap);
    }
}

let maxHeap = new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(20)
maxHeap.insert(5)
maxHeap.insert(2)
// maxHeap.print()

