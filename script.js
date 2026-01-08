//Text Change
document.getElementById("change_text").addEventListener("click",function() {
	const newText  = ["Bye", "Good Bye", "To", "Your", "Class"];
	const divs = document.getElementByClassName("divison");

	for(let i = 0; i < divs.length; i++){
		divs[i].innerText = newText[i]; 
	}
})

//Calculator
document.getElementById("calculate").addEventListener("click",function () {
	const num1 = document.getElementById("num1");
	const num2 = document.getElementById("num2");
	let result;

	switch(operator){
		case "+": 
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num2 != 0? num1/num2 : "Cannot divide by zero";
			break;		
	}

	document.getElementById(result).innerText = "Result " + result;
	
})