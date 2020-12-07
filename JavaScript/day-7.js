// get input value  -- getElementById()
var x = document.getElementById("input") //获取输入框元素: input
var y = document.getElementById("html") //获取 id=html 的元素

var email = document.getElementById("email") // id = email
var edisplay = document.getElementById("disemail") // id=disemail

function btn() {
    // if (x.value == first.value) {
    y.innerHTML = x.value; //将输入的 value 赋给 div 标签
    // }
    // if (email.value == second.value) {
    edisplay.innerHTML = email.value;
    // }
}

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs
        y.innerHTML = x.value;
    }
}