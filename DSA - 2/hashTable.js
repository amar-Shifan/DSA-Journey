// class HashTable{
//     constructor(size = 100){
//         this.table = new Array(size)
//     }

//     _hash(key) {
//         let total = 0;
//         const PRIME = 31; // A prime number to reduce collisions
//         for (let i = 0; i < Math.min(key.length, 100); i++) {
//             const char = key[i];
//             const value = char.charCodeAt(0) - 96;
//             total = (total * PRIME + value) % this.table.length;
//         }
//         return total;
//     }

//     set(key, value) {
//         const index = this._hash(key);
//         if (!this.table[index]) {
//             this.table[index] = [];
//         }
//         this.table[index].push([key, value]);
//     }

//     get(key){
//         const index = this._hash(key);
//         if(this.table[index]){
//             for(let pair of this.table[index]){
//                 if(pair[0] === key) return pair[1]
//             }
//         }

//         return undefined
//     }

//     delete(key){
//         let index = this._hash(key);

//         if(this.table[index]){
//             this.table[index] = this.table[index].filter(pair => pair[0] !== key)
//         }
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }

// let hash = new HashTable();

// hash.set("name" , "John")
// hash.set("name" , "Sam")
// hash.set("age" , 9)

// hash.display()

// function firtUniqueCharacter(str){
//     let HashTable = {};
//     for(let char of str){
//         HashTable[char] = (HashTable[char] || 0) + 1
//     }
//     for(let i = 0 ; i<str.length ; i++){
//         if(HashTable[str[i]] == 1) return i
//     }
//     return -1
// }

// console.log(firtUniqueCharacter('mamaala'))


function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const hashTable = {};
    for (let char of str1) {
        hashTable[char] = (hashTable[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!hashTable[char]) return false;
        hashTable[char]--;
    }
    return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
