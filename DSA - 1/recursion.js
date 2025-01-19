// Recursion
// Recursion is a programming technique where a function calls itself to solve a smaller 
// instance of a problem. It is widely used in algorithms for tasks like searching, sorting, 
// and working with data structures like trees and graphs.

// Key Concepts
// Base Case: The condition where recursion stops. Without it, the function will call itself indefinitely, causing a stack overflow.

// Recursive Case: The part where the function calls itself to solve a smaller version of the original problem.

// Stack Usage: Each recursive call is stored in the call stack until it resolves. This can lead to memory issues if the 
// recursion is too deep.

// function factorial(num){
//     if(num === 0) return 1;
//     return num * factorial(num-1);
// }

// console.log(factorial(5))


// function fibonacci(num){
//     if(num == 0) return 0
//     if(num == 1) return 1

//     return fibonacci(num - 1) + fibonacci(num - 2)
// }

// console.log(fibonacci(6))


function sumOfDigits(num){
    if(num < 10) return num
    return (num%10) + sumOfDigits(Math.floor(num / 10))
}

console.log(sumOfDigits(1234))


function reverse(str){
    if(str === '') return ''
    return reverse(str.slice(1)) + str[0]
}

console.log(reverse('hello'))

function palindrome(str){
    if(str.length <= 1) return true 
    if(str[0] !== str[str.length-1]) return false

    return palindrome(str.slice(1,-1))
}
console.log(palindrome('malayalam'))