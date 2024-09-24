const Utils = (() => {
  const reverseString = c => c.split('').reverse().join('')
  const isPalindrome = n => String(n) === String(reverseString(n));
  return {
    reverseString,
    isPalindrome,
  }
})();
window.Utils = Utils;