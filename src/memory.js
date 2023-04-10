function Deck(cardPairs){
  this.cardpairs = cardPairs;
  this.length = cardPairs * 2;
  this.deckArray = []; 
}

let deck = new Deck(5); // global variable to be deleted?

Deck.prototype.buildDeck = function(){
  let arr = [];
  const len = this.cardpairs; 
  for(let i =1; i<=len+.5; i= i+.5){
    arr.push(Math.floor(i));
  }
  this.deckArray = arr;
};

Deck.prototype.randomizeDeck() = function(){
  console.log(this.deckArray);
}