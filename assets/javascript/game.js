var WORDS =["every", "mother","counts","countries","donate"]
var word="";
var answerArray = [];

function init(){
 word = WORDS[Math.floor(Math.random() * WORDS.length)];

answerArray = [];

for (var i = 0; i < word.length; i ++) {
    answerArray [i] = "_";
}
document.getElementById("answer").innerHTML = answerArray.join(" ");
document.getElementById("message").innerHTML = "Type a letter to begin"
}
init();

function Guess() {
var guess = document.getElementById("guess").value;
var ShowThis="";

if (guess.length !== 1) {
ShowThis = "please enter only one letter";
}

else {
    var i=0; 
    for (i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            answerArray[i] = guess;
            showThisMessage = "correct "+guess+" is in the answer";
        }
    }
}

    var remaining_letters = answerArray.length;
    for (i = 0; i < answerArray.length; i ++) {
        if (answerArray[i]) !== '_') {
            remaining_letters -= 1; 
        }
        }
    if (remaining_letters == 0) {
        ShowThis= "You Guessed it";
    }
    
    if ( remaining_letters === "") {
        ShowThis = "Keep Trying!"+ guess;
    }

document.getElementById("guess").innerHTML = answerArray.join(" ");
document.getElementById("message").innerHTML = ShowThis;

function quit () {
    document.getElementById("message").innerHTML = "The word is " +word;
for ( var k = 0; k < word.length; k++) {
    answerArray[k] = word [k];
}
document.getElementById ("answer").innerHTML = answerArray.join(" ");

}
