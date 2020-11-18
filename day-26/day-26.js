function Order() {
    this.price = null;
    this.payMethod = null;
}

Order.prototype.payMethod = function(method) {
    this.payMethod = method;
}

Order.prototype.calc = function() {

    return this.payMethod.calc(this.price);
}

// 构造器
function StudentCard() {}
StudentCard.prototype.calc = function(total) {
        return total;
    }
    // 构造器
function TeacherCard() {}
TeacherCard.prototype.calc = function(total) {
        return total * .9;
    }
    // 构造器
function Cash() {}
Cash.prototype.calc = function(total) {
    return total * 1.1;
}

var order = new Order();
order.payMethod(new StudentCard());