// Prep:
// P:
// input: two arrays, one search array and other queries
// R:
// returns an array of how many times each query shows up in the search array
// E:
// input: ['aba', 'baba', 'aba', 'xzxb'] and ['aba', 'xzxb', 'ab']
// output:[2, 1, 0]
// P:
// -one big loop (queries arr)
// -smaller loop (search)
// -for each query, we should search through search array and add a counter

function sparse(s, q){
  let countArr = []
   for(let elQ of q){
    let counter = 0
    for(let elS of s){
      if(elQ === elS){
        counter++
      }
    }
    countArr.push(counter)
  }
  return countArr
}
console.log(sparse(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']))

// Summary:
// -created an empty array for the counterrs
// -created a for loop to go through the q array
// -created a counter and set equal to 0 bc i want it to reset when it starts looking for a new string
// -created the second loop to go through the search array
// -if query string matches string in the search arrry then add one to counter
// -once it finds out how many, push that number to the count array and return it


// Question:
// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example



// There are  instances of ',  of '' and  of ''. For each query, add an element to the return array, .

// Function Description

// Complete the function matchingStrings in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:

// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query
// Input Format

// The first line contains and integer , the size of .
// Each of the next  lines contains a string .
// The next line contains , the size of .
// Each of the next  lines contains a string .




//  .

// Sample Input 1

// CopyDownload
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab
// Sample Output 1

// 2
// 1
// 0

// Sample Input 2

// CopyDownload
// 3
// def
// de
// fgh
// 3
// de
// lmn
// fgh
// Sample Output 2

// 1
// 0
// 1

// Sample Input 3

// CopyDownload
// 13
// abcde
// sdaklfj
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// na
// asdjf
// na
// basdn
// sdaklfj
// asdjf
// 5
// abcde
// sdaklfj
// asdjf
// na
// basdn
// Sample Output 3

// 1
// 3
// 4
// 3
// 2




// function matchingStrings(strings, queries) {
//     // Write your code here
//  let countArr = []
//  for(let elQ of queries){
//     let counter = 0
//     for(let elS of strings){
//       if(elQ === elS){
