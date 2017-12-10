var inquirer = require("inquirer")
const chalk = require('chalk');

function userGuess(wArray, bArray, x) {
    console.log(bArray)
    this.wArray = wArray;
    this.bArray = bArray;
    this.x = x;
    var correctLetters = 0;
    var guessesLeft = 8;
    var lettersGuessed = [];
    var userInput;


    this.getInput = function() {
        var self = this
        inquirer
            .prompt({
                name: "guess",
                type: "input",
                message: "Please pick a letter.",

            }, )
            .then(function(answer) {
                userInput = answer.guess

                var repeatedLetter = false;

                lettersGuessed.forEach(function(arrayLetter, index) {

                    if (userInput === arrayLetter) {
                        repeatedLetter = true;
                    }

                })
                lettersGuessed.push(userInput)

                if (repeatedLetter) {
                    console.log("You have already picked that letter. Please pick another.")
                    self.getInput();
                } else {
                    self.compare();
                }

            })
    }

    this.compare = function() {

        var foundOne = false;
        wArray.forEach(function(arrayLetter, index) {

            if (userInput === arrayLetter) {
                foundOne = true;
                console.log(chalk.green("CORRECT"))
                bArray[index] = userInput;
                correctLetters++
                console.log(chalk.blue(bArray))
            }

        })
        if (foundOne === false) {
            console.log(chalk.red("INCORRECT"))
            guessesLeft--
            console.log(chalk.yellow("You have " + chalk.magenta(guessesLeft) + " guesses left"))
        }

        if (correctLetters !== x.length && guessesLeft !== 0) {
            this.getInput()
        } else {
            if (correctLetters === x.length) {
                console.log(chalk.bold.green("YOU ARE A WINNER"))
            } else {
                console.log(chalk.bold.red("Sorry you lose. The word was", chalk.cyan(x) + " Let's Play Again"))

            }
        }

    }
}


module.exports = userGuess;