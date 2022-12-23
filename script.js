var numTies = 0;
var numWins = 0;
var numLosses = 0;

var opponentInputList = ['R', 'P', 'S'];

var countinue = true;
while (countinue) {
    var userInput = window.prompt("Enter R, P, or S (for rock paper or scissors). :)");
    var opponentInput = opponentInputList[getNum()];
    window.alert("The computer choese " + opponentInput);
    check(userInput, opponentInput);
    var confirm = window.confirm("Would you like to countinue?");
    if (!confirm) {
        countinue = false;
    }
}

window.alert("Tally:\nWins: " + numWins + "\nLosses: " + numLosses + "\nTies: " + numTies);

function getNum() {
    return Math.floor(Math.random() * 3);
}

function check(user, comp) {
    var outcome = null;
    if ((user === 'R' && comp === 'R') || 
        (user === 'P' && comp === 'P') ||
        (user === 'S' && comp === 'S')) {
            window.confirm("You tied with the computer :]");
            numTies++;
            outcome = 'tie';
    } else if ((user === 'R' && comp === 'S') ||
                (user === 'P' && comp === 'R') ||
                (user === 'S' && comp === 'P')) {
                    window.confirm("Congrats!!! You won!!!");
                    numWins++;
                    outcome = 'win';
    } else {
        window.confirm("Damn bro you lost :( Hold this L for me!");
        numLosses++;
        outcome = 'loss';
    }
    return outcome;
};