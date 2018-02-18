var words = ["every","mother","counts","nurture","volunteer"]
var random = words[Math.floor(Math.random() * words.length)];

var k;
var count = 0;
var blankarr = [];

function begingame()
{
    for (var i = 0; i < random.length; i++)
    {
        blankarr[i] = "_";

    }

    k = blankarr.join(" ");
    document.getElementById("word").innerHTML = k;
}

function Letter() 
{
 var letter = document.getElementById("numberletters").value;

 if (letter.length > 0) 



for ( var i= 0; i < random.length; i++)
{
    if (random[i] === letter)
    {
        blankarr[i] = letter;
    }
}
count++;
document.getElementById("counter").innerHTML = "number of tries" + count;
document.getElementById("letters").innerHTML = blankarr.join(" ");

}
