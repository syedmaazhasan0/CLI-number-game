#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// computer will generate a random number - done
// user will guess a random number - done
// comparing user no with origional no and shoe result - done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.green.italic("Congratulations you guessed the right number"));
}
else {
    console.log(chalk.red.bold.underline("Oops you guess the wrong number! Try again"));
}
