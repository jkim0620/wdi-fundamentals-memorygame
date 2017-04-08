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

var flipCard = function () {
	var cardId = this.getAttribute('data-id');

	this.setAttribute('src', cards[cardId].cardImage);
	
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}	
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'img/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

createBoard();

