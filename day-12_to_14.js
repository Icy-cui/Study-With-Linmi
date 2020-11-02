let buffer = "0";
let totalNum = 0;
let prevOp;
const screen = document.querySelector('.screen')

function buttonClick(value) {
    let nextVal = parseInt(value);
    // console.log(typeof(value));
    // console.log(typeof(parseInt(value))); // change datatype to int
    if (isNaN(nextVal)) {
        dealSymbols(value);
    } else {
        if (buffer === "0") {
            buffer = value;
        } else {
            buffer += value;
            // console.log(buffer);
        }
    }
    screen.innerText = buffer;
}

function handleMath(value) {
    if (buffer === "0") {
        // do nothing
        return;
    }
    const intBuffer = parseInt(buffer);
    if (totalNum === 0) {
        totalNum = intBuffer;
    } else {
        operations(intBuffer);
    }
    prevOp = value;
    buffer = "0";
}

function operations(intBuffer) {
    if (prevOp === "+") {
        totalNum += intBuffer;
    } else if (prevOp === "-") {
        totalNum -= intBuffer;
    } else if (prevOp === "×") {
        totalNum *= intBuffer;
    } else {
        totalNum /= intBuffer;
    }
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
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(value);
            break;
        case "=":
            if (prevOp == null) {
                return;
            }
            operations(parseInt(buffer));
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