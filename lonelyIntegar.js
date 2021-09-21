// Prep:
// P:
// input: an array of integars
// R:
// returns the value that has no duplicate
// E:
// input: [1, 2, 3, 4, 3, 2, 1]
// output: 4
// P:
// 1. create an empty array and memory
// 1.5 create sort arr
// 2. create 1st loop of ori array
// 3. compare ele to memory, if the same add it to the new arr
// 4.2nd loop to go over org array, third loop over new array
// 5.find out if includes the ele

function lonely(a){
  let dupsArr = []
  let memEl = 0
  a.sort((a, b) => a - b)
  for(let int of a){
    if(int === memEl){
      dupsArr.push(int)
    }
    memEl = int

  }
  console.log(dupsArr)
  for(let int of a){
    if(dupsArr.includes(int) === false){
      return int
    }
  }

}
console.log(lonely([1, 2, 3, 4, 3, 2, 1] ))

// Summary:
// -create an empty array and a var that will save a number
// -sort the given array
// -first loop of the given array
// -compare if the cur int equals the memory var
// -if it does, that means it is a duplicate and will be added to the duplcate array
// -have the mem var reassigned to the cur int
// -create 2nd loop to go through org array
// -if int is not included in the dups array, than that is the nummber we must return

// Question:
// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example

// The unique element is .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

// int a[n]: an array of integers
// Returns

// int: the element that occurs only once
// Input Format

// The first line contains a single integer, , the number of integers in the array.
// The second line contains  space-separated integers that describe the values in .

// Constraints

// It is guaranteed that  is an odd number and that there is one unique element.
// , where .
