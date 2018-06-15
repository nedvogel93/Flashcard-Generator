var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("Who was the first president of the US?", "George Washington");
var card2 = new BasicCard("Who is the current president of the US?", "Donald Trump"); 
var card3 = new BasicCard("Who was the youngest president of the US?", "Theodore Roosevelt");
var card4 = new BasicCard("Who was the oldest president of the US?", "Donald Trump");
var card5 = new BasicCard("Who was the tallest president of the US?", "Abraham Lincoln");






cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);

function studyCards() {
	
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if(answer.question === cards[cardCount].back) {
						console.log("correct");
					
						cardCount ++
						studyCards();
					}   
					else {
					
						console.log("incorrect");
						console.log("Correct answer is:  " + cards[cardCount].back);
						
						cardCount ++
					
						studyCards();
					}

				});

	}


}
studyCards();