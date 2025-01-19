// Array Sample Questions
// Reverse an Array

// let arr = [1,2,3,4,5,6];
// let temp = 0
// let n = arr.length - 1

// for(let i = 0 ; i< Math.floor(arr.length / 2) ; i++){
//     temp = arr[i];
//     arr[i] = arr[n-i]
//     arr[n-i] = temp
// }

// console.log(arr)

// Find the Maximum Value in an Array
// let max = -Infinity
// for(let i = 0 ; i<arr.length ; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max)

//  Filter Even Numbers from an Array
// let even = []
// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
//     }
// }

// console.log(even)

// function isPalindrome(val){
//     let rev = val.split('').reverse().join('')
//     if(rev === val) return true 
//     return false 
// }
// let str = ['malayalam' , 'mala']

// str.forEach(val => {
//     if(isPalindrome(val)){
//         console.log(true) 
//     }else{
//         console.log(false)
//     }
// })






let string = 'word'
let word = string.split('')
let n = word.length - 1
let tem = null

for(let i = 0 ; i< Math.floor(word.length/2) ; i++){
    tem = word[i]
    word[i] = word[n-i]
    word[n-i] = tem
}

console.log(word.join(''))