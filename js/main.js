var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "img/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "img/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "img/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "img/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var flipCard = function (cardId) {
	
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

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
