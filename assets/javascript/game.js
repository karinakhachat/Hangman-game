var WORDS =["every", "mother","counts","countries","donate"]
var word="";
var answerArray = [];
var showThisMessage= " ";


function init(){
 word = WORDS[Math.floor(Math.random() * WORDS.length)];

answerArray = word.split(' ');

for (var i = 0; i < word.length; i ++) {
    answerArray [i] = "_";
}
console.log(word);

document.getElementById("answer").innerHTML = answerArray.join(" ");
document.getElementById("message").innerHTML = "Type a letter to begin"
}
init();
//works for now returns hidden word to console and replaces it with _ until 
//user guesses a letter

function Guess(){
    var guess = document.onkeyup = function(event) 
    {
        var guess = event.key;
        console.log(guess);
//working as well, log the user guess letter

        console.log(answerArray.includes(guess));
        if(guess === answerArray[i])
        {
         answerArray[i].push(guess);
        }
      
         else {
        var i = 0;
        for (i = 0; i < word.length; i++) 
        {
            if (word[i] === guess) 
            {
                answerArray[i] = guess;
                document.getElementById
            }
        }
        console.log(showThisMessage)
    }
    }

}

Guess();


    var remaining_letters = answerArray.length;
    for (i = 0; i < answerArray.length; i++) {
        if (answerArray[i] !== '_') {
            remaining_letters -= 1;
        }
    }
    if (remaining_letters == 0) {
        showThisMessage = "You Guessed it";
    }

    if (remaining_letters === "") {
        showThisMessage = "Keep Trying!" + guess;
    }

    document.getElementById("answer").innerHTML = answerArray.join(" ");
    document.getElementById("message").innerHTML = showThisMessage;

    function quit() {
        document.getElementById("message").innerHTML = "The word is " + word;
        for (var k = 0; k < word.length; k++) {
            answerArray[k] = word[k];
        }
        document.getElementById("answer").innerHTML = answerArray.join(" ");

    }
