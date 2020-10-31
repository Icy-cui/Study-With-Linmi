let buffer = "0";
let totalNum = 0;
let prevOp;
const screen = document.querySelector('.screen')

function buttonClick(value) {
    let nextVal = value;
    // console.log(typeof(value));
    // console.log(typeof(parseInt(value))); // change datatype to int
    if (nextVal != NaN) {
        if (buffer === "0") {
            buffer = value;
        } else {
            buffer += value;
            console.log(buffer);
        }
    } else {
        dealSymbols(value);
    }
    screen.innerText = buffer;
}

function handleMath() {

}

function flushOperation() {

}

function dealSymbols(value) {
    switch (value) {
        case "AC":
            buffer = "0";
            totalNum = 0;
            break;
        case "←":
            if (buffer.length == 1) {
                buffer = "0";
            } else {
                buffer.substring(0, buffer.length - 1)
            }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(value);
            break;
        case "=":
            if (prevOp == null)
                return;
            flushOperation(parseInt(buffer));
            prevOp = null;
            buffer = +totalNum;
            totalNum = 0;
            break;
    }
}

function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function(event) {
        // console.log(event.target.innerText);
        buttonClick(event.target.innerText);
    });
}

init();