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
                this.insertNode(this.left , newNode)
            }
        }   else {
            if(root.right === null){
                root.right = newNode
            } else {
                this.insertNode(this.right , newNode)
            }
        }
    }

    isEmpty(){
        return this.root === null
    }
}

let bst = new BinarySearchTree();

bst.insert(10)
bst.insert(5)
bst.insert(7)
bst.insert(20)
bst.insert(15)

console.log('Tree is Empty ? ', bst.isEmpty() );