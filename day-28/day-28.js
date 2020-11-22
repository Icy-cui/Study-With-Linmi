function Payment(balance) {
    this.balance = balance;
    this.next = null;
}
Payment.prototype.setNext = function(payment) {
    return this.next = payment;
}

Payment.prototype.canPay = function(money) {
    return this.balance >= money;
}
Payment.prototype.pay = function(money) {
    if (!this.canPay(amount)) {
        console.log(this.balance);

        //责任链的下游没有元素了
        if (!this.next)
            return false;

        return this.next.pay(amount);
    }

    this.balance -= amount;
    console.log(this.balance);
}

var subven = new Payment(100);
var schol = new Payment(50);
var recharge = new Payment(20);

var price = 100;

// 灵活的设置支付的顺序
subven.setNext(schol).setNext(recharge);
subven.pay(price);