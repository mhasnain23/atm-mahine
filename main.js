#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    }
]);
async function main() {
    if (pinAnswer.pin === pin) {
        console.log(`Correct pin code!!`);
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "Please select one operation.",
                choices: ["withdraw", "check balance", "fast cash"],
            }
        ]);
        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount you want to withdraw",
                }
            ]);
            if (amountAns.amount < balance) {
                balance -= amountAns.amount;
                console.log(`Your balance is ${balance}`);
            }
            else {
                console.log("Insufficient funds.");
            }
        }
        else if (operationAns.operation === "check balance") {
            console.log(`Your balance is ${balance}`);
        }
        else if (operationAns.operation === "fast cash") {
            let fast = await inquirer.prompt([{
                    name: "fastcash",
                    type: "list",
                    message: "Chose the cash to withdraw.",
                    choices: ["1000", "3000", "5000", "7000"],
                }]);
            if (fast.fastcash === "1000") {
                balance -= 1000;
                console.log(`Your balance is ${balance}`);
            }
            else if (fast.fastcash === "3000") {
                balance -= 3000;
                console.log(`Your balance is ${balance}`);
            }
            else if (fast.fastcash === "5000") {
                balance -= 5000;
                console.log(`Your balance is ${balance}`);
            }
            else if (fast.fastcash === "7000") {
                balance -= 7000;
                console.log(`Your balance is ${balance}`);
            }
        }
    }
    else {
        console.log(`Incorrect pin number.`);
    }
}
main();
