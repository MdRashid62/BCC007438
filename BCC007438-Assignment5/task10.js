function numberOfVowels(str){
    
    var strInput = prompt("Type a string to get the quantity of vowels: ");
    var vowelsCount = 0;
    var strToLower = strInput.toLowerCase();
    for (var i = 0; i < strToLower.length; i++){
            switch(strToLower.charAt(i)){
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                vowelsCount += 1;
                    break;
            }
        }
        alert("Your typed String " + strInput + " has " + vowelsCount + " vowels.");
}
numberOfVowels();