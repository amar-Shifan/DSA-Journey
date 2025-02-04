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

        node.isEndOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]) return false
            node = node.children[char]
        }

        return node.isEndOfWord;
    }

    startWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return false
            node = node.children[char]
        }

        return true
    }

    delete(word){
        return this._delete(this.root , word , 0)
    }

    _delete(node , word , index){
        if(index === word.length) {
            if(!node.isEndOfWord) return false
            node.isEndOfWord = false 
            return Object.keys(node.children).length === 0
        }

        let char = word[index];
        if(!node.children[char]) return false

        let shouldDelete = this._delete(node.children[char] , word , index + 1);
        if(shouldDelete) {
            delete node.children[char];
            return Object.keys(node.children).length == 0
        }
        
        return false
    }
}

let trie = new Trie()
trie.insert('amar')
trie.insert('aman');
console.log('Start with Prefix : ' , trie.startWith('am'))
trie.delete('amar')
console.log('Is char Exist ' , trie.search('amar'))