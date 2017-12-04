function countDown(secs, elem){
	var element = document.getElementById(elem);
	element.innerHTML = "You have "+secs+" seconds remaining";
		if(secs < 0){
			clearTimeout(timer);
			alert('Out of time!');
		}
	secs--;
	var timer = setTimeout('countDown('+secs+',"'+elem+'") ',1000);
}

function submitAnswers(){
	var total = 5;
	var score = 0;

	//Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	//Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
			return false;
		}
	}

	//Set Correct Answers
	var Answers = ["b", "b", "c", "d", "d"];

	//Check Answers
	if(q1 === Answers[0]){
		score++;
	}
	if(q2 === Answers[1]){
		score++;
	}
	if(q3 === Answers[2]){
		score++;
	}
	if(q4 === Answers[3]){
		score++;
	}
	if(q5 === Answers[4]){
		score++;
	}

	//Display Results
	var results = document.getElementById('results');

	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';

 	alert('You scored '+score+' out of '+total);

 	return false;

 }