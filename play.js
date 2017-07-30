//require Basic Cards module from BasicCard.js
var BasicCard = require("./BasicCard.js");
//require Cloze Cards module from ClozeCard.js
var ClozeCard = require("./ClozeCard.js");
//require inquirer npm
var inquirer = require("inquirer");
//require fs npm to read and write questions from a file questions.txt
var fs = require("fs");

//prompt to start - create basic, create cloze, review cards, or play
newGame();
function newGame() {
	inquirer.prompt([
	{
		type: "list",
		name: "start",
		message: "What would you like to do?",
		choices: ["New Basic Card", "New Cloze Card", "Review Cards", "Play!"]
	}
	])
	.then(function(answers){
		//response user picks
		var response = answers.start;
		console.log(response);
		//switch statement for the response chosen
		switch(response) {
			case "New Basic Card":
				newBasic();
			break;
			case "New Cloze Card":
				newCloze();
			break;
			case "Review Cards":
				review();
			case "Play!":
				play()
			break;
		}
	})
};
//new Basic Cards
function newBasic(){
	inquirer.prompt([
		{
			type: "input",
			name: "questionBasic",
			message: "What should the 'front' of the card ask?"
		},
		{
			type: "input",
			name: "answerBasic",
			message: "What should the 'back' of the card say?"
		}
	])
	.then(function (basic){
		var basicCardNew = new BasicCard(basic.questionBasic, basic.answerBasic);
		console.log(basicCardNew);
		console.log("-------------------");
		addCards("Front: " + basic.questionBasic + "\r\n\r\n");
		addCards("Back: " + basic.answerBasic + "\r\n\r\n");
		newGame();
	})
};

//new Cloze Cards
function newCloze(){
	inquirer.prompt([
		{
			type: "input",
			name: "questionCloze",
			message: "What is the full statement?"
		},
		{
			type: "input",
			name: "answerCloze",
			message: "What should be removed?"
		}
	])
	.then(function (cloze){
		var clozeCardNew = new ClozeCard(cloze.questionCloze, cloze.answerCloze);
		console.log(clozeCardNew);
		console.log("-------------------");
		addCards("Front: " + clozeCardNew.partial + "\r\n\r\n");
		addCards("Back: " + clozeCardNew.cloze + "\r\n\r\n");
		newGame();
	})
};
//append cards to cards.txt file
function addCards(userEntry){
	fs.appendFile("cards.txt", userEntry, function(err){
		if (err){
			return console.log(err);
		}
	});
}
//Review Cards
function review(){
	fs.readFile("cards.txt", "utf8", function(err, data){
		if (err){
			return console.log(err);
		}
		else{
			console.log(data);
		}
})};
//Play!