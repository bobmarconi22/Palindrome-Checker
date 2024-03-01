function isPalindrome(str) {
    let cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let revStr = cleanStr.toUpperCase().split(' ').join('').split("").reverse().join("");
  console.log(revStr)
  if(revStr === cleanStr.toUpperCase().split(' ').join('')){
    return `😃 ${str.toUpperCase()} IS A PALINDROME!! 😃`
  };
  return `😒 ${str.toUpperCase()} IS NOT A PALINDROME. 😒`
}

console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("horse"));
console.log(isPalindrome("a man a plan a canal panama"));
