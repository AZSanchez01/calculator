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
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) return "bawal sa kaniya!";
            return divide(a, b);
        case '%':
            if (b === 0) return "bawal sa kaniya!";
            return mod(a, b);
    }
}

//Event to display numbers on click
let screen = document.querySelector(".screen");
let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
    let button = e.target;
    if (Number.isInteger(+button.id)) screen.textContent += button.id;
});

let num1;
let num2;
let result;