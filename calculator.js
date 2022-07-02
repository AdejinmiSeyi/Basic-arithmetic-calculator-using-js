
// var avgScoreJohn;
// var avgScoreMark;
// var avgScoreMary;



// function winner() {

//     avgScoreJohn = (89+ 120 +103)/3;
//     avgScoreMark = (116 + 94 + 123)/3;
//     avgScoreMary = (97 + 134 +100)/3;

//     if (avgScoreJohn > avgScoreMark && avgScoreJohn > avgScoreMary) {
//         console.log("John is the average winner with " + avgScoreJohn + " points");
//     }
//     else  {
//         console.log("Mark is the average winner with " + avgScoreMark + " points");
//     }
// }
// winner();


const operator = prompt('Enter an operator eg: +,-, / or *:')

const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  

let result; 

if (operator == '+') { // use + (addition) operator to add two numbers  
    result = number1 + number2;  
}  
else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
    result = number1 - number2;  
}  
else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; // use / (division) operator to divide two numbers  
}  
  
// display the result of the Calculator  
window.alert(" Result is" + result); 