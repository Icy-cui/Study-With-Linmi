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

Payment.prototype.pay = function(amount) {
    var oldbalance = this.balance;
    this.balance -= amount;

    if (this.balance < 0) {
        if (this.next && this.next.pay(-this.balance)) {
            this.balance = 0;
        } else {
            this.balance = oldbalance;
            return false;
        }
    }
    return true;
}


var subven = new Payment(100);
var schol = new Payment(50);
var recharge = new Payment(20);

var price = 160;

// 灵活的设置支付的顺序
subven.setNext(schol).setNext(recharge);