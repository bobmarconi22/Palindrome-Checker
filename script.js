function isPalindrome(str) {
  let revStr = str.toUpperCase().split(' ').join('').split("").reverse().join("");
  console.log(revStr)
  if(revStr === str.toUpperCase().split(' ').join('')){
    return `😃 ${str.toUpperCase()} IS A PALINDROME!! 😃`
  };
  return `😒 ${str.toUpperCase()} IS NOT A PALINDROME. 😒`
}

console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("horse"));
console.log(isPalindrome("a man a plan a canal panama"));
