var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var flipCard = function (cardId) {
	
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
}

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

flipCard(3);
flipCard(2);
