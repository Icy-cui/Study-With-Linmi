// go live mode

document.body.style.background = 'limegreen'; // set background colour to red
setTimeout(() => document.body.style.background = '', 3000); // set back

// visit all child nodes
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]); // Text, DIV, Text, UL, ..., SCRIPT
}

console.log(document.body.lastChild);

let l = document.getElementById('elem');
console.log(l.children, l.firstElementChild.innerHTML = 'gg', l.lastElementChild);

/**
 * 对于所有节点：parentNode，childNodes，firstChild，lastChild，previousSibling，nextSibling。
 * 仅对于元素节点：parentElement，children，firstElementChild，lastElementChild，previousElementSibling，nextElementSibling。
 * "getElementsBy*"是动态的，“ querySelectorAll”是静态的
 */