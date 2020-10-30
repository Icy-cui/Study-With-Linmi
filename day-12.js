let buffer = "0";

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
    }
}

function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function(event) {
        // console.log(event.target.innerText);
        buttonClick(event.target.innerText);
    });
}

init();