 

 

 function first_last(number){
    var numString=number.toString();

var FirstDigit=parseInt(numString[0]);
var LastDigit=parseInt(numString[numString.length-1]);

var sum=FirstDigit+LastDigit;

return sum;


 }

 var number=42563;
 var result= first_last(number);

 console.log(result)



// function sumOfFirstAndLastDigit(number) {
//     // Convert the number to a string
//     var numStr = number.toString();
  
//     // Get the first and last characters
//     var firstDigit = parseInt(numStr[0]);
//     var lastDigit = parseInt(numStr[numStr.length - 1]);
  
//     // Calculate the sum
//     var sum = firstDigit + lastDigit;
  
//     return sum;
//   }
  
//   // Example usage:
//   var number = 12345;
//   var result = sumOfFirstAndLastDigit(number);
//   console.log("Sum of first and last digit of " + number + " is " + result);
  
 