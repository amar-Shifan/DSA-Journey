class Node{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        } else {
            this.insertNode(this.root , newNode)
        }
    }

    insertNode(root , newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            } else {
                this.insertNode(root.left , newNode)
            }
        }   else {
            if(root.right === null){
                root.right = newNode
            } else {
                this.insertNode(root.right , newNode)
            }
        }
    }

    search(root , value){
        if(!root){
            return false 
        } else {
            if(root.value == value){
                return true
            } else if(value < root.value){
                return this.search(root.left , value)
            } else {
                return this.search(root.right , value)
            }
        }
    }

    preOrder(root){
        if(root){
            if(root){
                console.log(root.value);
                this.preOrder(root.left)
                this.preOrder(root.right);
            }
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    // BFS
    levelOrder(){
        let queue = [];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root , value)
    }

    deleteNode(root, value) {
        if (root === null) { 
            return root;
        }
    
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Node to be deleted found
            if (!root.left && !root.right) {
                return null; // No child
            }
            if (!root.left) {
                return root.right; // Only right child
            } else if (!root.right) {
                return root.left; // Only left child
            }
    
            // Node with two children: Replace with the minimum value in the right subtree
            const minValue = this.min(root.right); // Find the smallest value in the right subtree
            root.value = minValue; // Replace current node's value with the smallest value
            root.right = this.deleteNode(root.right, minValue); // Delete the minimum node
        }
        return root;
    }

    isEmpty(){
        return this.root === null
    }
}

let bst = new BinarySearchTree();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(20)
bst.insert(3)
bst.insert(7)
bst.delete(5)
bst.levelOrder(bst.root)
console.log(bst.max(bst.root))
// console.log('Availble or not ?',bst.search(bst.root , 15))
// console.log('Tree is Empty ? ', bst.isEmpty());