#! /usr/bin/env node 

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "inter first number:", type: "number", name: "firstnumber" },
  { message: "inter second number:", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to performe operation", 
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "Multiplication", "Division"],
  },
]);

//conditional statment

if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
}  else {
  console.log("please select valid operator");
}
