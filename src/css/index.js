function palindrome(str) {
  string = str.toUpperCase().replace(/\s/g, '');
  // приводим всю строку к одному регистру, а затем вызываем метод replace(), который позволяет избавиться от пробелов в строке
  return string === string.split('').reverse().join('');
}
// сравниваем строку с перевернутой строкой методом split (берет строку и превращает ее в массив по разделителю пустая строка "") после этого вызываем нативный метод js reverse, затем делаем обратно строку из массива пустым разделителем("")

palindrome('racecar'); //true
palindrome('table'); //false
palindrome('Radar'); //true
palindrome('Anna'); //true
palindrome('God'); //false
palindrome('А роза упала на лапу Азора'); //true

// function palindrome(str) {
//   let newstr = str.toLowerCase().replace(/[\W_]/g, '');

//   if (newstr === newstr.split('').reverse().join('')) {
//     return true;
//   }
//   return false;
// }
