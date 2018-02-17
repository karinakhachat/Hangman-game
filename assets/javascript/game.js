var word=["M","O","T","H","E","R"];
var numberofguesses;
var rightanswer;
var wronganswer;
var winCounter = 0;
var lossCounter = 0;
var underscores = "";

for(i=0; i<word.length; i++) {
    underscores.push ("_")
}

console.log(word);

var wordelement = document.getElementById('word');
var lettercountelement = document.getElementById('lettercount');
var currentletterelement = document.getElementById ('currentletter');

function checkguess(letter) {
    var  lettercheck = false;
    for (var i = 0; 1 < underscores; i++) {
        if (word[i] == letter)
        { lettercheck = true;
        }
 if (lettercheck) {
    
    
    for( var i =0; i = underscores; i++) 
    {
    if (word [i] == letter) (
    underscores[i] = letter
    )
     }
     console.log(underscores);

 }
  else { wronganswer.push(letter);
    numberofguesses--;
    console.log("that was the wrong answer"+ numberofguesses + "are remaining");
    
  }
    }
}

function done () {

    console.log("Win")
}