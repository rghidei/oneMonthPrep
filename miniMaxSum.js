// Prep:
// P:
// input: an array of integars output: two integars seprated with space
// R:
// min of 4 of 5 values added together
// max of 4 of 5 values added together
// E:
// input: 12345 output: 10 14
// P:
// -need to sort the array from low to high
// -add up the first 4 ele
// -add up the last 4 ele

function minSum(arr){
  arr.sort((a, b) => a - b)
  let minArr = arr.slice(0, 4)
  let maxArr = arr.slice(1, arr.length)
  let min = minArr.reduce((arr, cur) => cur + arr)
  let max = maxArr.reduce((arr, cur) => cur + arr)
  console.log(min, max)
}
console.log(minSum([1, 2, 3, 4, 5]))

// Summary:
// 1.sort the array from low to high
// 2.create two arrays, grab the first lowest 4 for the min array, grab the last 4 for the max arr
// 5.add up the sum for both arrays

// Question:
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Hints: Beware of integer overflow! Use 64-bit Integer.

// Need help to get started? Try the Solve Me First problem

// Language
// JavaScript (Node.js)

// More
// 25262728293037383940413132333435364243444546
//   arr.sort((a, b) => a - b)
//   let minArr = arr.slice(0, 4)
//   let maxArr = arr.slice(1, arr.length)
//   let min = minArr.reduce((arr, cur) => cur + arr)
//   let max = maxArr.reduce((arr, cur) => cur + arr)
//   console.log(min, max)

// }

// function main() {

// Line: 31 Col: 3

// Submit Code

// Run Code

// Upload Code as File

// Test against custom input
// Congratulations
// You solved this challenge. Would you like to challenge your friends?Share on FacebookShare on TwitterShare on LinkedIn
// Next Challenge

// Test case 0

// Test case 1

// Test case 2

// Test case 3

// Test case 4

// Test case 5

// Test case 6

// Test case 7

// Test case 8

// Test case 9

// Test case 10

// Test case 11

// Test case 12

// Test case 13

// Test case 14
// Compiler Message
// Success
// Input (stdin)

// Download
// 1 2 3 4 5
// Expected Output

// Download
// 10 14
