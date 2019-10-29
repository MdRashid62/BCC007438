//Remove all available HTML tags from given string
givenText = "<p><strong><em>Only Print This</em></strong></p>";
remove = givenText.replace(/<[^>]*>/g,"");
console.log("Output: " + remove);
