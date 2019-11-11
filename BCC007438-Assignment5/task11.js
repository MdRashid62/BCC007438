function isVowel(x) {
    return /[aeiouAEIOU]/.test(x);
}

var input = '';
while (input.length != 1) {
  input = prompt("Enter a character to check if its a vowel or not: ");
}
alert(isVowel(input));