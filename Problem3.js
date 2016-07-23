/*

https://projecteuler.net/problem=3

Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

Paul Merrigan, 7/22/2016

*/

var done = false;
var num = 600851475143;
var array=[];
var divisor = 2;
var pointer = 0;

console.log("Find largest prime factor of " + num);

while (!done) {
    
    if ((num % divisor) === 0){
        foundFactor();
    }  
    else {

        divisor++;

        while (((num % divisor) > 0) && (divisor < num)){
            divisor++;
        }
        
        if ((num % divisor) === 0){
            foundFactor();
        }
        else{
            array[pointer] = num;
            done = true;
        }
    }
    divisor = 2;
}

function foundFactor(){
        array[pointer] = divisor;
        pointer++;
        num = (num / divisor);
        return;
}

var largestPrimeFactor = array[0];

for (var t = 1; t < array.length; t++){
  
    if (array[t] > largestPrimeFactor){
        
        largestPrimeFactor = array[t];
    }
    
}

console.log("Result = " + largestPrimeFactor);

