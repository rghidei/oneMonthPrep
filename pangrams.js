// Prep:
// P:
// input: a string
// R:
// returns whether it is an pangram or not
// E:
// input: "The quick brown fox jumps over the lazy dog"
// output: "pangram"
// P:
// -turn the string into an array
// -create an array of the abcs
// -two loops
// -use the include method

function pangrams(s){
  let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z']
  s = s.toLowerCase().replace(/\s+/g, '')
  let sArr = s.split('')
  for(let el of abc){
    console.log(el)
    if(sArr.includes(el) === false){
      return 'not pangram'
    }
  }
  return 'pangram'
}
console.log(pangrams('The quick brown fox jumps over the lazy dog'))

// Summary:
// -created an array of the abcs
// -then i made sure everthing to lower case and remove the spaces
// -loop throught the abc array
// -make sure every letter of abc is in the string array

// Question:
// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

// Example

// The string contains all letters in the English alphabet, so return pangram.

// Function Description

// Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

// pangrams has the following parameter(s):

// string s: a string to test
// Returns

// string: either pangram or not pangram
// Input Format

// A single line with string .

// Constraints


// Each character of ,

// Sample Input

// Sample Input 0

// We promptly judged antique ivory buckles for the next prize

// Sample Output 0

// pangram

// Sample Explanation 0

// All of the letters of the alphabet are present in the string.

// Sample Input 1

// We promptly judged antique ivory buckles for the prize

// Sample Output 1

// not pangram

// Sample Explanation 0

// The string lacks an x.
