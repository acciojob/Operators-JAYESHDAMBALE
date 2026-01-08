//Text Change
document.getElementById("change_text").addEventListener("click",function() {
	const newText  = ["Bye", "Good Bye", "To", "Your", "Class"];
	const divs = document.getElementByClassName("divison");

	for(let i = 0; i < divs.length; i++){
		divs[i].innerText = newText[i]; 
	}
})