var myCards = document.getElementById('container');
var resultsArray = [];
var buttonPause = document.getElementById('button-pause');

var Interval ;
var images = [
    '1', '2', '3', '4', '5', '6', '7', '8',  '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'
];

var clone = images.slice(0); // duplicate array
var cards = images.concat(clone); // merge to arrays

// Shufffel function
function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  return o;
}
shuffle(cards);

for (var i = 0; i < cards.length; i++) {
  card = document.createElement('div');
  card.dataset.item = cards[i];
  card.dataset.view = "card";
  myCards.appendChild(card);

  card.onclick = function () {
    if (this.className != 'flipped' && this.className != 'correct'){
        this.className = 'flipped';
        var result = this.dataset.item;
        resultsArray.push(result);
    }


    if (resultsArray.length > 1) {
      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter ++;
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }

    }

  }

};

var check = function(className) {
  var x = document.getElementsByClassName("flipped");

  setTimeout(function() {

    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }

  },500);

}



