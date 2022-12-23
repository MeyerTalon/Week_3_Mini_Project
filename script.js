var numTies = 0;
var numWins = 0;
var numLosses = 0;

var userInput = window.prompt("Enter R, P, or S (for rock paper or scissors). :)");

var opponentInputList = ['R', 'P', 'S'];

var opponentInput = opponentInputList[getNum()];

check(userInput, opponentInput);

window.alert("Tally:\nWins: " + numWins + "\nLosses: " + numLosses + "\nTies: " + numTies);



function getNum() {
    return Math.floor(Math.random() * 3);
}

function check(user, comp) {
    if ((user === 'R' && comp === 'R') || 
        (user === 'P' && comp === 'P') ||
        (user === 'S' && comp === 'S')) {
            window.alert("You tied with the computer :]");
            numTies++;
    } else if ((user === 'R' && comp === 'S') ||
                (user === 'P' && comp === 'R') ||
                (user === 'S' && comp === 'P')) {
                    window.alert("Congrats!!! You won!!!");
                    numWins++;
    } else {
        window.alert("Damn bro you lost :( Hold this L for me!");
        numLosses++;
    }

};