


var cardsInPlay = []
var cards = ["queen", "queen", "king", "king"]

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId])
	cards.push(cards[cardId])
}





flipCard(0);
flipCard(2);
checkForMatch();