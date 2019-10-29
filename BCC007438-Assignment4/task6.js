//simulates a dice using random() method of JS Math class.
var randNum = Math.random();
var freshRandNum = (randNum * 6) + 1; 
var diceValue = Math.floor(freshRandNum);
document.write("Random dice value: " + diceValue);