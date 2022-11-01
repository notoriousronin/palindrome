palindrome("racecar"); //true
palindrome("table"); //false
palindrome("Radar"); //true
palindrome("Anna"); //true
palindrome("God"); //false
palindrome("А роза упала на лапу Азора"); //true

function palindrome(str) {
  return str === str.split("").reverse().join("");
}
