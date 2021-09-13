// Prep:
// P:
// input: rep 12hr clock string
// R:
// return: rep 24hr clock string
// E:
// input: 07:05:45PM
// output: 19:05:45
// P:
// -find out if it am or pm
// -covert the first two numbers

 let twoFourArr = ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"]
 function time(s){
   //split it into letters of an array
  let arr = s.split('')
  let firstTimeEl = arr[0] + arr[1]

  if(arr[8] === "P"){
    if(firstTimeEl == 12){
    arr.splice(8, 2)
    return arr.join('')
    } else{
      return convert(s)
    }
  } else if(arr[8] === "A"){
    if(firstTimeEl == 12){
      arr[0] = 0
      arr[1] = 0
    }
    arr.splice(8, 2)
    return arr.join('')
  }

 }
 console.log(time("12:45:54PM"
))


function convert(s){
  let arrTwo = s.split(":")
  console.log(arrTwo)
  let orgTime = Number(arrTwo[0])
  let newTime = twoFourArr[orgTime]
  arrTwo[0] = newTime
  console.log(arrTwo)
  arrTwo = arrTwo.join(":")
  arrTwo = arrTwo.split('')
  arrTwo.splice(8, 2)
  arrTwo = arrTwo.join('')
  return arrTwo

}


// Summary:
// -created an array with the times 12 to 23
// -first function, split the string into array, find out if it is am or pm and if it is 12 noon or midnight
// -if it is am or 12 noon do nothing but remove the last elements
// -if it is midnight switch it too 00 and remove the last two elements
// -if it is pm times, compare with the array to find the right time to switch

// Question:
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example


// Return '12:01:00'.


// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45
