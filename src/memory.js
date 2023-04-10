function Deck(cardPairs){
  this.cardpairs = cardPairs;
  this.length = cardPairs * 2;
  this.deckArray = []; 
}

Deck.prototype.buildDeck = function(){
  for(let i =1; i<=this.cardPairs; i= i+.5){
    this.deckArray.push(Math.floor(i));
  }
}