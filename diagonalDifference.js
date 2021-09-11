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

Summary:
-created two empty arrays
-created two var as starters for when we should add the elements to their spefic arrays
-created three loops bc the given input is 2d array
-main for of loop is to get to mini arrays
-first loop for the left side, add the right elemtns to the empty array
-added more to i
-added 1 to the left starter, took 1 from the right starter
-then i got the sums from arrays
-then i found the difference 
