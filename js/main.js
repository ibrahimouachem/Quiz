var questions = [ 
	{
		question: "How many planetes are there in the our system?",
		answer: 9
	},
	{
		question: "what is the position of the earth ?",
		answer: 3
	},
	{
		question: "what is the first planete?",
		answer: "mercure"
	},
	{
		question: "what is the last planete?",
		answer: "pleton"
	},
	{
		question: "what is the bigest planete?",
		answer: "jupiter"
	}
]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}

