//constructor function to create cloze flashcard objects
function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(this.cloze, "______________")
};

module.exports = ClozeCard;
