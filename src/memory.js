export default function Deck(cardPairs){
  this.cardPairs = cardPairs;
  this.length = cardPairs * 2;
  this.deckArray = [];

}

// let deck = new Deck(3); // global variable to be deleted?

Deck.prototype.buildDeck = function(){
  let arr = [];
  const len = this.cardPairs; 
  for(let i =1; i<=len+.5; i= i+.5){
    arr.push(Math.floor(i));
  }
  this.deckArray = arr;
};

Deck.prototype.randomizeDeck =  function(){
  let randomArr = [];
  let deckCopy = [];
  deckCopy = this.deckArray.slice();
  let isNotFinished = true;
  console.log(deckCopy);
  while(isNotFinished){
    const rand = Math.ceil(Math.random()*deckCopy.length)-1;
    let helperArr = [];
    let helperArr2 = [];
    helperArr = deckCopy.splice(rand);
    console.log("helper",helperArr,"copy",deckCopy);
    const addNumber = helperArr.shift();
    helperArr2 = helperArr.concat(deckCopy);
    deckCopy.splice(0);
    deckCopy = helperArr2.slice();
    randomArr.push(addNumber);

    console.log(deckCopy);
    if(deckCopy.length === 0){
      isNotFinished = false;
    }
  }
  console.log(randomArr);
  console.log(deckCopy);
};

Deck.prototype.peekCard = function(num){
  return this.deckArray[num];
};  


