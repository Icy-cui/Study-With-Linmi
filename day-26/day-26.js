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
    if (holiday) {
        return total *= .9;
    } else {
        return total;
    }
}

// 构造器
function TeacherCard() {}
TeacherCard.prototype.calc = function(total) {
    if (teachersDay) {
        total *= .5;
    } else {
        total *= .9
    }
    return price;
}

// 构造器
function Cash() {}
Cash.prototype.calc = function(total) {
    return total * 1.1;
}

var order = new Order();
order.payMethod(new StudentCard());

// condition 1
var teachersDay = false;

//condiiton 2
var holiday = false;