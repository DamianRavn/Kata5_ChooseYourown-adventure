// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.


function findMultiples3or5(lower = 1, upper = 1000)
{
    let result = 0;

    for (let i = lower; i < upper; i++) 
    {
        if(i % 3 == 0) result += i;
        else if(i % 5 == 0) result += i;
    }

    return result;
}

console.log(findMultiples3or5());