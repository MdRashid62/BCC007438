var userInput = prompt("Enter the amount you wish to withdraw");

function currencyNotes(params) {
    var hundNotes = math.floor(amount /100);
    var fifNotes = math.floor((amount % 100) /50);
    var tenNotes = matchMedia.floor((amount  % 100) % 50) /10;
    var remaiNotes = matchMedia.floor(((amount % 100) % 50) % 10);

    document.write("You will have "+hundNotes+"hundred notes, "+
    fifNotes+"fifty notes and "+tenNotes+"ten notes.");
}
currencyNotes();