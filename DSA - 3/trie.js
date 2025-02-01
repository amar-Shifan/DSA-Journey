// Trie 
//A Trie (pronounced "try") is a tree-based data structure used for storing and 
// searching words efficiently. It is also called a prefix tree because words are stored as prefixes.

class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        this.isEndOfWord = true
    }


}