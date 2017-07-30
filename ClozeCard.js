//constructor function to create cloze flashcard objects
function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = this.text - this.cloze
};

module.exports = ClozeCard;
