let prompt = require('prompt-sync')();
let leftOperand = prompt("input a number");
let rightOperand = prompt("input an operand ");
leftOperand = parseInt(leftOperand);
rightOperand= parseInt(rightOperand);
let operand = prompt("choose an operand");

switch(operand){
    case '<' : console.log( leftOperand < rightOperand);
                break;
    case '>': console.log( leftOperand > rightOperand);
            break;

    case '+': console.log(leftOperand + rightOperand);
             break;

    case '-': console.log( leftOperand -rightOperand);
                break;

    case '*': console.log(leftOperand * rightOperand);
             break;
    case '/':console.log(leftOperand/rightOperand)
            break;

    default: console.log ("invalid input");
             break;  
}