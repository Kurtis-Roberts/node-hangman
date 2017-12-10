var inquirer = require('inquirer');
var randomWord = require('random-word');
var wordJs = require("./word.js")

inquirer
    .prompt({
        name: "confirm",
        type: "list",
        message: "Are You Ready For Some Hangman?",
        choices: ["Yes", "No"]
    }, )
    .then(function(answer) {
        var confirm = answer.confirm
        if (confirm === "Yes") {
            var randWord = randomWord();
            var wordGen = new wordJs(randWord)
            wordGen.push();
        } else {
            console.log("Come Back Later.")
        }

    })