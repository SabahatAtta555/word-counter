#! /usr/bin/env node
import chalk from "chalk";
import readline from "readline-sync";
console.log(chalk.magenta.bold("\n\t Welcome to \'CodeWithSabi\' -WORD COUNTER\n"));
const text = readline.question('Please enter your text: ');
// Count words without whitespaces
const words = text.split(/[^\w]+/);
const wordCount = words.length;
// Count characters without whitespaces
const charCount = text.replace(/[^\w]/g, '').length;
console.log(`Number of words: ${wordCount}`);
console.log(`Number of characters: ${charCount}`);
