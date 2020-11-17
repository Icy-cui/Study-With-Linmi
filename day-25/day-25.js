function init() {
    var a = new Division('.page.a');
    var b = new Division('.page.b');
    var c = new Division('.page.c');
}

function Division(selector) {
    this.ele = document.querySelector(selector);
    // console.log(this.ele);
    this.add = document.querySelector('.add');
    this.sub = document.querySelector('.sub');

    this.add.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(1);
    });

    this.sub.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(2);
    });
}




var money = document.getElementById('balance');

init();