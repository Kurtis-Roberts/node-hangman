var letters = require("./letters.js")

function WordArray(x) {
    var wArray = [];
    var bArray = [];

    var bIcon = "_";

    this.push = function() {
        for (i = 0; i < x.length; i++) {
            wArray.push(x[i]);
            bArray.push(bIcon);

        }
        this.guessed()
    }

    this.guessed = function() {
        var letter = new letters(wArray, bArray, x)

        letter.getInput();
    }
}

module.exports = WordArray