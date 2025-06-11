//Calculator operations
function add (a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}
function mod (a, b) {
    return a % b;
}
function operate (a, b, operator) {
    switch(operator) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            if (b === 0) return "bawal yan bading!";
            return divide(a, b);
        case 'modulo':
            if (b === 0) return "bawal yan bading!";
            return mod(a, b);
    }
}


//Event to display numbers on click
let screen = document.querySelector(".screen");
let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    let button = e.target;

    //Numeric keys
    if (Number.isInteger(+button.id)) {
        //If a result is currently shown, reset display
        if (isResultDisplayed) {
            screen.textContent = '';
            isResultDisplayed = false;
        }
        screen.textContent += button.id;
    }
    //Decimal
    if (button.id == "dec" && !screen.textContent.includes(".")) {
        if (screen.textContent == '') screen.textContent += "0";
        screen.textContent += ".";
    }

    //AC button
    if (button.id == "ac") {
        num1 = '';
        num2 = '';
        result = '';
        operator = '';
        screen.textContent = '';
    }
    //Delete button
    if (button.id == "delete") {
        screen.textContent = screen.textContent.slice(0, -1);
        num1 = +screen.textContent;
    }

    //Equals button
    if (button.id == "equals") {
        if (!isNaN(Number(screen.textContent))  && isResultDisplayed == false) {
            num2 = +screen.textContent;
            result = operate(num1, num2, operator);
            screen.textContent = result;
            isResultDisplayed = true;
            
            if (!isNaN(Number(screen.textContent))) num1 = result;
            else num1 = '';
            num2 = '';
            operator = '';
        }
    }
    //operate
    if (button.classList.contains("operator")) {
        // If result is displayed, continue
        //If num1 is empty AND current display is a number, put current display to num1
        if (num1 == '' && !isNaN(Number(screen.textContent))) {
            num1 = +screen.textContent;
            screen.textContent = '';
        }
        else if (num2 == '' && !isNaN(Number(screen.textContent)) && isResultDisplayed == false) {
            num2 = +screen.textContent;
            screen.textContent = '';
        }

        if (num2 != '') {
            result = operate(num1, num2, operator);
            screen.textContent = result;
            isResultDisplayed = true;
            num1 = result;
            num2 = '';
        }

        //DONT CHANGE
        operator = button.id;
    }
    console.log(`num1: ${num1} - ${typeof(num1)}`);
    console.log(`num2: ${num2} - ${typeof(num2)}`);
    console.log(`result: ${result} - ${typeof(result)}`);
    console.log(`op: ${operator} - ${typeof(operator)}`);
    console.log("-----------------------------------------")
});

let num1 = '', num2 = '', result = '', operator = '';
let isResultDisplayed = false;