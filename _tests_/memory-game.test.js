import Deck from "./../src/memory.js";

describe('Deck', () => {

  test('should correctly build a deck based in amount of cards', () => {
    const deck  = new Deck(3);
    expect(deck.cardPairs).toEqual(3);
    expect(deck.length).toEqual(6);
    expect(deck.deckArray).toEqual([]);

    deck.buildDeck();
    expect(deck.deckArray).toEqual[1,1,2,2,3,3];

    expect(deck.peekCard(3)).toEqual(2);
  });
});
