var input = prompt("Enter any word to check if it's a Palindrome or not: ");
function palindrome(str) {
    // defining variables
    var string = str.toLowerCase();
    var length = string.length;
    var twoParts = Math.floor(length/2);
    // For loop
    for(i = 0; i< twoParts; i++){
        if(string[i] !== string[length -1 - i]){
            return alert(input + " is not a Palindrome! ");
        }
        else{
            return alert(input + " is a Palindrome! ");
        }
    }
}
palindrome(input);