// count the number of occurrences of the word “n” in given string.
var text = "The quick brown fox jumps over the lazy dog.";
var textLength = text.length;
text = text.toLowerCase();
var search = "the";
var indexOfSearch = text.indexOf(search);
var counter = 0;

for (var i = 0; i < textLength; i++)
{
    if (text.indexOf(text.charAt(i)) === indexOfSearch)
    {
        counter++;
    }
}

document.write("Text: The quick brown fox jumps over the lazy dog. There are "+counter+" occurences of word 'THE'.");