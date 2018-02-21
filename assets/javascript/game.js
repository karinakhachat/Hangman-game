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

var WORDS = ["every", "mother", "counts", "countries", "donate"]
var word = "";
var answerArray = [];


function Guess(){
    var guess = document.onkeyup = function(event) 
    {
        var guess = event.key;
        document.getElementById("answer").innerHTML = guess;
    

        if(guess === word[i])
        {
         document.getElementById("answer").innerHTML;
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

    document.getElementById("guess").innerHTML = answerArray.join(" ");
    document.getElementById("message").innerHTML = showThisMessage;

    function quit() {
        document.getElementById("message").innerHTML = "The word is " + word;
        for (var k = 0; k < word.length; k++) {
            answerArray[k] = word[k];
        }
        document.getElementById("answer").innerHTML = answerArray.join(" ");

    }
