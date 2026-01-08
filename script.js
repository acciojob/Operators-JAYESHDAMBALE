// Calculator
document.getElementById("calculate").addEventListener("click", function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result = 0;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    }

    // IMPORTANT: ONLY number, no text
    document.getElementById("result").innerText = result;
});

// Text Change
document.getElementById("change_text").addEventListener("click", function () {
    const texts = ["Bye", "Good Bye", "To", "Your", "Class"];
    const divs = document.getElementsByClassName("division");

    for (let i = 0; i < divs.length; i++) {
        divs[i].innerText = texts[i];
    }
});
