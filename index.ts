#! /usr/bin/env node

import inquirer from "inquirer"

// declair a const answer assingbit to the result of inquirer.prompt function

const answers:{
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: " Enter your sentence to count the word:"
    }
])
const words = answers.Sentence.trim().split(" ")

//print the array of the words to the console
console.log(words)

//print the word count of the sentence to the consol

console.log(`Your sentence word count is ${words.length}`);