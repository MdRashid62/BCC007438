// Find out factorial
function factorial(x) 
{
    if(x === 0)
    {
        return 1;
    }
    return x*factorial(x-1);
}
console.log("Factorial(8) ------> " + factorial(8)); // 40320
console.log("Factorial(5) ------> " + factorial(5)); // 120
console.log("Factorial(9) ------> " + factorial(9)); // 362880