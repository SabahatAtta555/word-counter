#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import  readline from "readline-sync";

console.log(chalk.magenta.bold ("\n\t Welcome to \'CodeWithSabi\' -WORD COUNTER\n"));


const text: string = readline.question('Please enter your text: ');

// Count words without whitespaces
const words: string[] = text.split(/[^\w]+/);
const wordCount: number = words.length;

// Count characters without whitespaces
const charCount: number = text.replace(/[^\w]/g, '').length;

console.log(`Number of words: ${wordCount}`);
console.log(`Number of characters: ${charCount}`);