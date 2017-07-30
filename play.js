//require Basic Cards module from BasicCard.js
var BasicCard = require("./BasicCard.js");
//require Cloze Cards module from ClozeCard.js
var ClozeCard = require("./ClozeCard.js");
//require inquirer npm
var inquirer = require("inquirer");
//require fs npm to read and write questions from a file questions.txt
var fs = require("fs");

//prompt to start - create basic, create cloze, or play
inquirer.prompt([
	{
		type: "list",
		name: "start",
		message: "What would you like to do?",
		choices: ["New Basic Card", "New Cloze Card", "Play!"]
	}])
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
			case "Play!":
				play()
			break;
		}
	});