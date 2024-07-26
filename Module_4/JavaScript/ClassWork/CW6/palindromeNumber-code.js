function isPalindrome(p){
    let str = p.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome(3453));    // Output: false
console.log(isPalindrome(-909));    // Output: false
console.log(isPalindrome(909));     // Output: true
console.log(isPalindrome("sissis"));    // Output: true
console.log(isPalindrome("simsis"));    // Output: false
console.log(isPalindrome("coc"));       // Output: true
console.log(isPalindrome("saas"));      // Output: true