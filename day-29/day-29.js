function Payment(balance) {
    this.balance = balance;
    this.next = null;
}

Payment.prototype.setNext = function(payment) {
    return this.next = payment;
}
Payment.prototype.canPay = function(amount) {
    return this.balance >= amount;
}


var subven = new Payment(100);
var schol = new Payment(50);
var recharge = new Payment(20);

var price = 100;

// 灵活的设置支付的顺序
subven.setNext(schol).setNext(recharge);