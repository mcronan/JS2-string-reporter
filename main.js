var greeting = prompt("Please enter any word");
var greetingLength = greeting.length;
var greetingChar = greeting.charAt(2);
var response = alert(greeting.toUpperCase() + " is indeed the word you have enered!" + "\n" + greeting.toLowerCase() + " is " + greetingLength + " letters long!" + "\n" + "The third character is '" + greetingChar  + "'." + "\n" + "Would you like to hear " + greeting + " in a sentecence? Here we go: 'The reason you picked " + greeting + " must be that it is your favourite word!'" + "\n" + "Subword: " + greeting.substring(0,3) );

