/*
Name: Stephanie Mueller
Date: September 28, 2018
Project 2: Guess the Number Game

This program is a number game. It will ask you to guess a number 
between 1 and 20. If you guess a number to high or low, it will tell you.
After six tries, if you have guessed correctly, you won, if you have not
guessed correctly, you lose. After you win or lose it will ask if you 
want to play again. You can either answer yes or no and it will go 
from there.*/

const input = require('readline-sync');


var name;
console.log('Hello! Welcome to guess the number game. What is your name?')
console.log(name);
console.log('Hello ' + name "!");
var Number = 20;
var counter = 0;
MaxTries= 6;
var RandomNumber = Math.floor(Math.random() * Number) + 1;
while (Attempts !== RandomNumber) {
    var Attempts = prompt("Please guess a number between 1 and " + Number);
    counter += 1;
if (Attempts == RandomNumber) {
        document.write("You guessed correctly. You won!");
        document.write("<p> The correct number was " + RandomNumber "</p>")
        document.write("<p> It took you " + counter " attempts to get the correct number");
        document.wrtie("To play again enter 'y' (yes) or 'n' (no)");
    }
    if (counter > MaxTries) {
        document.write("You have run out of attempts. You lose!");
        document.wrtie("To play again enter 'y' (yes) or 'n' (no)");
        break;
    }
    else if (counter > RandomNumber) {
        counter++;
        document.write("Sorry! Your guess is too high, try again");
    }
    else () {
        counter++
        document.write("Sorry! Your number is too low, try again.");
    }
}
