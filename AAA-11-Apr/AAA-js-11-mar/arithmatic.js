let num1 = Number(prompt("Enter the value 1"));  
let num2 = Number(prompt("Enter the value 2"));  
let opr = prompt(
  "Choose an operation:\n1 Add (+)\n2 Subtract (-)\n3 Multiply (*)\n4 Divide (/)"
);

switch (opr) {
  case "+":
  case "1":
    console.log(num1 + num2);
    break;
  case "-":
  case "2":
    console.log(num1 - num2);
    break;
  case "*":
  case "3":
    console.log(num1 * num2);
    break;
  case "/":
  case "4":
    if (num2 !== 0) {
      console.log(num1 / num2);
    } else {
      console.log("Error: Division by zero is not allowed.");
    }
    break;
  default:
    console.log("Invalid operator.");
    break;
}