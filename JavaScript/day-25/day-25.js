function init() {
    var a = new Division('.page.a');
    var b = new Division('.page.b');
    var c = new Division('.page.c');
}

function Division(selector) {
    // 单例
    var resource = new Resource();
    this.ele = document.querySelector(selector);
    // console.log(this.ele);
    this.add = this.ele.querySelector('.add');
    this.sub = this.ele.querySelector('.sub');
    // input 
    this.input = this.ele.querySelector('input');

    this.add.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log(resource.balance, this.input.value)
        // console.log(resource.balance);
        resource.add(this.input.value);
        renderBalance();
    });

    this.sub.addEventListener('click', (e) => {
        e.preventDefault();
        resource.sub(this.input.value);
        renderBalance();
    });
}

function renderBalance() {
    var resource = new Resource();
    money.innerText = resource.balance;
}

function Resource() {
    if (Resource.instance)
        return Resource.instance;
    else {
        this.balance = 100;
        Resource.instance = this;
    }
}

Resource.prototype.add = function(num) {
    if (!num) {
        return;
    } else {
        this.balance += parseFloat(num);
    }
}

Resource.prototype.sub = function(num) {
    if (!num) {
        return;
    } else {
        this.balance -= parseFloat(num);
    }
}

var money = document.getElementById('balance');

init();