/*
=============== Double Base Palindrome Challenge ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.
      
TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(double-base-palindrome-challenge)
      Don't worry about capitalization.
*/

/*
Question 1
The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

This question is from - https://projecteuler.net/problem=36
*/
const doubleBasePalindromeSum = function (base1, base2, upperLimit) {
    let sum = 0
    for (let i = 1; i <= upperLimit; i++) {
        let binNum = i.toString(base1)
        if (i.toString(base2) === String(i).split('').reverse().join('') && binNum === binNum.split('').reverse().join('')) {
            // console.log(`${i} is a palindrome, and so is its binary ${binNum}`)
            sum += i
        }
    }
    console.log(sum)
    return sum
}

doubleBasePalindromeSum(2, 10, 1000000)

// DO NOT MODIFY
module.exports = {
	doubleBasePalindromeSum,
}