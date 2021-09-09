// Prep:
// P:
// input: integar for the num of rows and col
// R:
// returns: the diff between the sum of l to r diagonally and r to l side
// E:
// input: 3 [1, 2, 3, 4, 5, 6, 9, 8, 9]
// output: 2
// P:
// -loop
// -add it to empy Arr'
// -find the sum and the difference

function diagonal(arr){
  let lrArr = []
  let rlArr = []
  let l = 0
  let r = arr.length - 1
  for(let a of arr){
    for(let i = l; i < a.length;i++){
      lrArr.push(a[i])
      i = i + arr.length
    }
    l += 1
    for(let i = r; i < a.length;i++){
        rlArr.push(a[i])
        i = i + arr.length
    }
      r -= 1
  }
  let leftSum = lrArr.reduce((cur, acc)=> cur + acc)
  let rightSum = rlArr.reduce((cur, acc)=> cur + acc)
  return Math.abs(leftSum - rightSum)
}
// console.log(diagonal([[1, 2, 3], [4, 5, 6], [9, 8, 9]]))

// console.log(diagonal([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))

// Summary:
// -created two empty arrays
// -created two var as starters for when we should add the elements to their spefic arrays
// -created three loops bc the given input is 2d array
// -main for of loop is to get to mini arrays
// -first loop for the left side, add the right elemtns to the empty array
// -added more to i
// -added 1 to the left starter, took 1 from the right starter
// -then i got the sums from arrays
// -then i found the difference

Question:
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
// For example, the square matrix  is shown below:
//
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
//
// Function description
//
// Complete the  function in the editor below.
//
// diagonalDifference takes the following parameter:
//
// int arr[n][m]: an array of integers
// Return
//
// int: the absolute diagonal difference
// Input Format
//
// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .
//
// Constraints
//
// Output Format
//
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
//
// Sample Input
//
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
//
// 15
// Explanation
//
// The primary diagonal is:
//
// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4
//
// The secondary diagonal is:
//
//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
//
// Note: |x| is the absolute value of x
