var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText

//text is the question; cloze is the answer
function ClozeCard(text, cloze) {
	this.text = text
	this.cloze = cloze

}

ClozeCard.prototype.full = function() {

	clozeDeleted = this.cloze
	clozeText = this.text


	clozeText = clozeText.replace("...", clozeDeleted);

	
	console.log(clozeText);

}


var card1 = new ClozeCard("...was the first president of the US?", "George Washington ");
var card2 = new ClozeCard(" ...is the current president of the US?", "Donald Trump "); 
var card3 = new ClozeCard("... was the youngest president of the US?", "Theodore Roosevelt ");
var card4 = new ClozeCard("...was the oldest president of the US?", "Donald Trump ");
var card5 = new ClozeCard("...was the tallest president of the US?", "Abraham Lincoln ");






cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);

function studyCards() {

	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

				
					if(answer.partial === cards[cardCount].cloze) {
						console.log("correct");
						
						cardCount ++
					
						studyCards();
					} 
					else {
						
						console.log("incorrect");
						cards[cardCount].full();
						
						cardCount ++
						
						studyCards();
					}

				});

	}

}

studyCards();
