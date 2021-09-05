// Prep:
// P:
// input: an array of integars
// R:
// returns the value of how many pairs of sock
// E:
// input: [1, 2, 1, 2, 1, 3, 2]
// output: 2
// P:
// -sort the numbers from low to high
// -create a loop and counter and mem
// -if there are two, add one to the counter

function match(arr){
  arr = arr.sort((a, b) => a - b)
  let count = 0
  let lastEl = 0
  for(let num of arr){
    if(num === lastEl){
      count++
      lastEl = 0
    } else{
      lastEl = num
    }
  }
  return count
}
console.log(match([1, 2, 1, 2, 1, 3, 2]))
console.log(match([10, 20, 20, 10, 10, 30, 50, 10, 20]))

// Summary:
// 1.sort the arry from low to high
// 2.created a var to keep count of the pairs
// 3.create a var to keep track of the last element
// 4.if the cur el equals the last el then they are a pair, add one to the counter and reset the last el variable
// 5.if not a match then the last el gets reassigned to the current element
// 6.return the counter

// Question:
// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3
// Explanation

// There are three pairs of socks
