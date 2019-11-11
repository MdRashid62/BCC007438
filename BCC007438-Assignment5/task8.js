function ageManager(dOb) {
    var dOb = prompt("Enter your date of birth to get details:\n example: Jan 1, 1970 ") //Jan 1, 1970
    var currentDate = new Date();
    var BiDay = new Date (dOb);

    var days = Math.floor((currentDate - BiDay) / (1000*60*60*24));
    var clYears = Math.floor(days / 365);
    var clMonths = Math.floor((days % 365)/31);
    var clDays = days - (clYears * 365) - (clMonths*31);

    document.write("You are "+clYears+" years, "+ clMonths+" months and " + 
    clDays+" days old");
}
ageManager();  