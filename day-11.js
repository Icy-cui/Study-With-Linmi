// DOM

// This string must be a valid CSS selector string
const redSquare = document.querySelector('.red-square');
redSquare.style.backgroundColor = 'limegreen'; // change color
redSquare.style.paddingLeft = '100px'; // change padding


function btn() {
    const button = document.querySelector('.btn_1');
    button.addEventListener('click', e => {
        e.preventDefault();
        alert("Hey there!");
    });
}

// change color
const input = document.querySelector('.color-input');
const paragraph = document.querySelector('.color-box');

input.addEventListener("change", function() {
    paragraph.style.backgroundColor = input.value;
});

// change innerText
const in_to_cp = document.querySelector('.input-to-copy')
const cp = document.querySelector('.p-to-copy-to')

in_to_cp.addEventListener("keyup", function() {
    cp.innerText = in_to_cp.value;
});

document.querySelector('.button-container').addEventListener('click', function(event) {
    alert(`You clicked on button ${event.target.innerText}`);
});