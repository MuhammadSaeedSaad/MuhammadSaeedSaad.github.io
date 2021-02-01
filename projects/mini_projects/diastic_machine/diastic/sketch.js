let srctxt;
let words;
let phrase = "";
let currentWord = 0;

function diastic(seed, words){
  for (var i=0; i < seed.length; i++){
    var c = seed.charAt(i);
    for (var j=currentWord; j < words.length; j++){
      if (words[j].charAt(i) === c){
        phrase += words[j] + " ";
        currentWord += 1;
        break;
      }
    }
  }
  return phrase;
}

// loading the source text to search in
function preload(){
  srctxt = loadStrings("abc.txt");
}

function setup() {
  noCanvas();
  srctxt = join(srctxt, " ");
  words = splitTokens(srctxt, " ,.?!\"()")
  // selecting the input box and the button by P5.js standard library functions
  var seed = select("#seed");
  var submit = select("#submit");
  // handling the clicking on the button event using a javascript anonymous function
  submit.mousePressed(function (){
    phrase = diastic(seed.value(), words);
    let paragraph = document.createElement("p");
    paragraph.className = "body";
    let phrase_text = document.createTextNode(phrase);
    console.log(typeof(phrase_text));
    paragraph.appendChild(phrase_text);
    let targetDiv = document.getElementById("bodydiv");
    targetDiv.appendChild(paragraph);
  });
}
